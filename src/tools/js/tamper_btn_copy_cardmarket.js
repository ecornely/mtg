// ==UserScript==
// @name         Card Market in french
// @namespace    http://tampermonkey.net/
// @version      2026-01-15
// @description  try to take over the world!
// @author       You
// @match        https://www.cardmarket.com/en/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cardmarket.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = new URL(window.location.href);
    const regex = /^https:\/\/www\.cardmarket\.com\/en\/(Pokemon|Magic)\/(Cards\/|Products\/Singles\/.*\/[^/]+)/;

    /**
     * Extracts card data from the grid.
     * @returns {string[]} Array of formatted card strings.
     */
    function gatherCards() {
        let grid = document.querySelector("table.table[role='grid']");
        if (!grid) grid = document.querySelector("table.table[id*='ArticleTable']");
        if (!grid) {
            return [];
        }

        return Array.from(grid.querySelectorAll("tr"))
            .map(row => {
            const countElement = row.querySelector("td:nth-child(3)");
            const nameElement = row.querySelector("td:nth-child(4)");

            if (countElement && nameElement) {
                const count = parseInt(countElement.textContent.trim(), 10);
                const name = nameElement.textContent.trim();
                return `${count} ${name}`;
            }
            return null;
        })
            .filter(item => item !== null);
    }

    /**
     * Copies a string text to the system clipboard.
     * @param {string} text - The text to copy.
     */
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
            console.log('Content successfully copied to clipboard!');
        })
            .catch(error => {
            console.error('Failed to copy to clipboard:', error);
        });
    }

    /**
     * Registers a global keyboard shortcut trigger.
     * @param {Function} action - The callback function to execute on trigger.
     */
    function registerShortcut(action) {
        document.addEventListener('keydown', function(event) {
            // Trigger on CTRL + ALT + C
            if (event.ctrlKey && event.altKey && event.key && event.key.toLowerCase() === 'c') {
                action();
            }
        });
        console.log("Tampermonkey added CTRL+ALT+C shortcut to copy wantlist");
    }

    if (regex.test(currentUrl.href)){
      if (
        !currentUrl.searchParams.has("language") ||
        !currentUrl.searchParams.has("minCondition")
      ) {
        console.log('Tampermonkey need to redirect to force language: french and min condition: near mint');
        if (!currentUrl.searchParams.has("language")) {
          currentUrl.searchParams.set("language", 2);
        }
        if (!currentUrl.searchParams.has("minCondition")){
          currentUrl.searchParams.set("minCondition", 2);
        }

        window.location.replace(currentUrl.href);
      }
    }
    else if(/^https:\/\/www\.cardmarket\.com\/en\/(Pokemon|Magic)\/((Wants|Orders)\/[^\/]+)/.test(currentUrl.href)){
        // Initialize the application logic
        registerShortcut(() => {
            console.log("CTRL+ALT+C pressed");
            const cards = gatherCards();

            if (cards.length > 0) {
                const clipboardContent = cards.join('\n');
                copyToClipboard(clipboardContent);
            }
        });
    }
    else {
        console.log("Tampermonkey enabled but didn't match url for french card");
    }
})();