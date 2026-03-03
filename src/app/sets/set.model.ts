export class CardSet {
    constructor(imageUrl: string, setName: string, setLink: string, setCode: string, cardCount: number, releaseDate: string) {
        this.imageUrl = imageUrl;
        this.setName = setName;
        this.setLink = setLink;
        this.setCode = setCode;
        this.cardCount = cardCount;
        this.releaseDate = releaseDate;
    }

    public imageUrl: string;
    public setName: string;
    public setLink: string;
    public setCode: string;
    public cardCount: number;
    public releaseDate: string;

    public static ALL_SETS : CardSet[] = [
    {
        "imageUrl": "sets/1E.png",
        "setName": "Limited Edition Alpha",
        "setLink": "https://gatherer.wizards.com/sets/1E",
        "setCode": "1E",
        "cardCount": 295,
        "releaseDate": "1993-08-05"
    },
    {
        "imageUrl": "sets/2E.png",
        "setName": "Limited Edition Beta",
        "setLink": "https://gatherer.wizards.com/sets/2E",
        "setCode": "2E",
        "cardCount": 302,
        "releaseDate": "1993-10-01"
    },
    {
        "imageUrl": "sets/2U.png",
        "setName": "Unlimited Edition",
        "setLink": "https://gatherer.wizards.com/sets/2U",
        "setCode": "2U",
        "cardCount": 302,
        "releaseDate": "1993-12-01"
    },
    {
        "imageUrl": "sets/AN.png",
        "setName": "Arabian Nights",
        "setLink": "https://gatherer.wizards.com/sets/AN",
        "setCode": "AN",
        "cardCount": 92,
        "releaseDate": "1993-12-01"
    },
    {
        "imageUrl": "sets/AQ.png",
        "setName": "Antiquities",
        "setLink": "https://gatherer.wizards.com/sets/AQ",
        "setCode": "AQ",
        "cardCount": 100,
        "releaseDate": "1994-03-01"
    },
    {
        "imageUrl": "sets/3E.png",
        "setName": "Revised Edition",
        "setLink": "https://gatherer.wizards.com/sets/3E",
        "setCode": "3E",
        "cardCount": 306,
        "releaseDate": "1994-04-01"
    },
    {
        "imageUrl": "sets/LE.png",
        "setName": "Legends",
        "setLink": "https://gatherer.wizards.com/sets/LE",
        "setCode": "LE",
        "cardCount": 310,
        "releaseDate": "1994-06-01"
    },
    {
        "imageUrl": "sets/DK.png",
        "setName": "The Dark",
        "setLink": "https://gatherer.wizards.com/sets/DK",
        "setCode": "DK",
        "cardCount": 119,
        "releaseDate": "1994-08-01"
    },
    {
        "imageUrl": "sets/FE.png",
        "setName": "Fallen Empires",
        "setLink": "https://gatherer.wizards.com/sets/FE",
        "setCode": "FE",
        "cardCount": 187,
        "releaseDate": "1994-11-01"
    },
    {
        "imageUrl": "sets/4E.png",
        "setName": "Fourth Edition",
        "setLink": "https://gatherer.wizards.com/sets/4E",
        "setCode": "4E",
        "cardCount": 378,
        "releaseDate": "1995-04-01"
    },
    {
        "imageUrl": "sets/IA.png",
        "setName": "Ice Age",
        "setLink": "https://gatherer.wizards.com/sets/IA",
        "setCode": "IA",
        "cardCount": 383,
        "releaseDate": "1995-06-01"
    },
    {
        "imageUrl": "sets/CH.png",
        "setName": "Chronicles",
        "setLink": "https://gatherer.wizards.com/sets/CH",
        "setCode": "CH",
        "cardCount": 125,
        "releaseDate": "1995-07-01"
    },
    {
        "imageUrl": "sets/HM.png",
        "setName": "Homelands",
        "setLink": "https://gatherer.wizards.com/sets/HM",
        "setCode": "HM",
        "cardCount": 140,
        "releaseDate": "1995-10-01"
    },
    {
        "imageUrl": "sets/AL.png",
        "setName": "Alliances",
        "setLink": "https://gatherer.wizards.com/sets/AL",
        "setCode": "AL",
        "cardCount": 199,
        "releaseDate": "1996-06-10"
    },
    {
        "imageUrl": "sets/CSP.png",
        "setName": "Coldsnap",
        "setLink": "https://gatherer.wizards.com/sets/CSP",
        "setCode": "CSP",
        "cardCount": 155,
        "releaseDate": "1996-07-21"
    },
    {
        "imageUrl": "sets/MI.png",
        "setName": "Mirage",
        "setLink": "https://gatherer.wizards.com/sets/MI",
        "setCode": "MI",
        "cardCount": 350,
        "releaseDate": "1996-10-08"
    },
    {
        "imageUrl": "sets/VI.png",
        "setName": "Visions",
        "setLink": "https://gatherer.wizards.com/sets/VI",
        "setCode": "VI",
        "cardCount": 167,
        "releaseDate": "1997-02-03"
    },
    {
        "imageUrl": "sets/5E.png",
        "setName": "Fifth Edition",
        "setLink": "https://gatherer.wizards.com/sets/5E",
        "setCode": "5E",
        "cardCount": 449,
        "releaseDate": "1997-03-24"
    },
    {
        "imageUrl": "sets/PO.png",
        "setName": "Portal",
        "setLink": "https://gatherer.wizards.com/sets/PO",
        "setCode": "PO",
        "cardCount": 222,
        "releaseDate": "1997-06-01"
    },
    {
        "imageUrl": "sets/WL.png",
        "setName": "Weatherlight",
        "setLink": "https://gatherer.wizards.com/sets/WL",
        "setCode": "WL",
        "cardCount": 167,
        "releaseDate": "1997-06-09"
    },
    {
        "imageUrl": "sets/TE.png",
        "setName": "Tempest",
        "setLink": "https://gatherer.wizards.com/sets/TE",
        "setCode": "TE",
        "cardCount": 350,
        "releaseDate": "1997-10-14"
    },
    {
        "imageUrl": "sets/ST.png",
        "setName": "Stronghold",
        "setLink": "https://gatherer.wizards.com/sets/ST",
        "setCode": "ST",
        "cardCount": 143,
        "releaseDate": "1998-03-02"
    },
    {
        "imageUrl": "sets/P2.png",
        "setName": "Portal Second Age",
        "setLink": "https://gatherer.wizards.com/sets/P2",
        "setCode": "P2",
        "cardCount": 165,
        "releaseDate": "1998-06-01"
    },
    {
        "imageUrl": "sets/EX.png",
        "setName": "Exodus",
        "setLink": "https://gatherer.wizards.com/sets/EX",
        "setCode": "EX",
        "cardCount": 143,
        "releaseDate": "1998-06-15"
    },
    {
        "imageUrl": "sets/UG.png",
        "setName": "Unglued",
        "setLink": "https://gatherer.wizards.com/sets/UG",
        "setCode": "UG",
        "cardCount": 94,
        "releaseDate": "1998-08-17"
    },
    {
        "imageUrl": "sets/UZ.png",
        "setName": "Urza's Saga",
        "setLink": "https://gatherer.wizards.com/sets/UZ",
        "setCode": "UZ",
        "cardCount": 350,
        "releaseDate": "1998-10-12"
    },
    {
        "imageUrl": "sets/GU.png",
        "setName": "Urza's Legacy",
        "setLink": "https://gatherer.wizards.com/sets/GU",
        "setCode": "GU",
        "cardCount": 143,
        "releaseDate": "1999-02-15"
    },
    {
        "imageUrl": "sets/6E.png",
        "setName": "Classic Sixth Edition",
        "setLink": "https://gatherer.wizards.com/sets/6E",
        "setCode": "6E",
        "cardCount": 350,
        "releaseDate": "1999-04-28"
    },
    {
        "imageUrl": "sets/PK.png",
        "setName": "Portal Three Kingdoms",
        "setLink": "https://gatherer.wizards.com/sets/PK",
        "setCode": "PK",
        "cardCount": 180,
        "releaseDate": "1999-05-01"
    },
    {
        "imageUrl": "sets/CG.png",
        "setName": "Urza's Destiny",
        "setLink": "https://gatherer.wizards.com/sets/CG",
        "setCode": "CG",
        "cardCount": 143,
        "releaseDate": "1999-06-07"
    },
    {
        "imageUrl": "sets/P3.png",
        "setName": "Starter 1999",
        "setLink": "https://gatherer.wizards.com/sets/P3",
        "setCode": "P3",
        "cardCount": 173,
        "releaseDate": "1999-07-01"
    },
    {
        "imageUrl": "sets/MM.png",
        "setName": "Mercadian Masques",
        "setLink": "https://gatherer.wizards.com/sets/MM",
        "setCode": "MM",
        "cardCount": 350,
        "releaseDate": "1999-10-04"
    },
    {
        "imageUrl": "sets/BR.png",
        "setName": "Battle Royale Box Set",
        "setLink": "https://gatherer.wizards.com/sets/BR",
        "setCode": "BR",
        "cardCount": 136,
        "releaseDate": "1999-11-12"
    },
    {
        "imageUrl": "sets/NE.png",
        "setName": "Nemesis",
        "setLink": "https://gatherer.wizards.com/sets/NE",
        "setCode": "NE",
        "cardCount": 143,
        "releaseDate": "2000-02-14"
    },
    {
        "imageUrl": "sets/PR.png",
        "setName": "Prophecy",
        "setLink": "https://gatherer.wizards.com/sets/PR",
        "setCode": "PR",
        "cardCount": 143,
        "releaseDate": "2000-06-05"
    },
    {
        "imageUrl": "sets/P4.png",
        "setName": "Starter 2000",
        "setLink": "https://gatherer.wizards.com/sets/P4",
        "setCode": "P4",
        "cardCount": 57,
        "releaseDate": "2000-07-01"
    },
    {
        "imageUrl": "sets/IN.png",
        "setName": "Invasion",
        "setLink": "https://gatherer.wizards.com/sets/IN",
        "setCode": "IN",
        "cardCount": 365,
        "releaseDate": "2000-10-02"
    },
    {
        "imageUrl": "sets/BD.png",
        "setName": "Beatdown Box Set",
        "setLink": "https://gatherer.wizards.com/sets/BD",
        "setCode": "BD",
        "cardCount": 90,
        "releaseDate": "2000-12-01"
    },
    {
        "imageUrl": "sets/PS.png",
        "setName": "Planeshift",
        "setLink": "https://gatherer.wizards.com/sets/PS",
        "setCode": "PS",
        "cardCount": 146,
        "releaseDate": "2001-02-05"
    },
    {
        "imageUrl": "sets/7E.png",
        "setName": "Seventh Edition",
        "setLink": "https://gatherer.wizards.com/sets/7E",
        "setCode": "7E",
        "cardCount": 350,
        "releaseDate": "2001-04-11"
    },
    {
        "imageUrl": "sets/AP.png",
        "setName": "Apocalypse",
        "setLink": "https://gatherer.wizards.com/sets/AP",
        "setCode": "AP",
        "cardCount": 158,
        "releaseDate": "2001-06-04"
    },
    {
        "imageUrl": "sets/OD.png",
        "setName": "Odyssey",
        "setLink": "https://gatherer.wizards.com/sets/OD",
        "setCode": "OD",
        "cardCount": 350,
        "releaseDate": "2001-10-01"
    },
    {
        "imageUrl": "sets/TOR.png",
        "setName": "Torment",
        "setLink": "https://gatherer.wizards.com/sets/TOR",
        "setCode": "TOR",
        "cardCount": 143,
        "releaseDate": "2002-02-04"
    },
    {
        "imageUrl": "sets/JUD.png",
        "setName": "Judgment",
        "setLink": "https://gatherer.wizards.com/sets/JUD",
        "setCode": "JUD",
        "cardCount": 143,
        "releaseDate": "2002-05-27"
    },
    {
        "imageUrl": "sets/ONS.png",
        "setName": "Onslaught",
        "setLink": "https://gatherer.wizards.com/sets/ONS",
        "setCode": "ONS",
        "cardCount": 350,
        "releaseDate": "2002-10-07"
    },
    {
        "imageUrl": "sets/LGN.png",
        "setName": "Legions",
        "setLink": "https://gatherer.wizards.com/sets/LGN",
        "setCode": "LGN",
        "cardCount": 145,
        "releaseDate": "2003-02-03"
    },
    {
        "imageUrl": "sets/SCG.png",
        "setName": "Scourge",
        "setLink": "https://gatherer.wizards.com/sets/SCG",
        "setCode": "SCG",
        "cardCount": 143,
        "releaseDate": "2003-05-26"
    },
    {
        "imageUrl": "sets/8ED.png",
        "setName": "Eighth Edition",
        "setLink": "https://gatherer.wizards.com/sets/8ED",
        "setCode": "8ED",
        "cardCount": 357,
        "releaseDate": "2003-07-28"
    },
    {
        "imageUrl": "sets/MRD.png",
        "setName": "Mirrodin",
        "setLink": "https://gatherer.wizards.com/sets/MRD",
        "setCode": "MRD",
        "cardCount": 306,
        "releaseDate": "2003-10-02"
    },
    {
        "imageUrl": "sets/DST.png",
        "setName": "Darksteel",
        "setLink": "https://gatherer.wizards.com/sets/DST",
        "setCode": "DST",
        "cardCount": 165,
        "releaseDate": "2004-02-06"
    },
    {
        "imageUrl": "sets/5DN.png",
        "setName": "Fifth Dawn",
        "setLink": "https://gatherer.wizards.com/sets/5DN",
        "setCode": "5DN",
        "cardCount": 165,
        "releaseDate": "2004-06-04"
    },
    {
        "imageUrl": "sets/CHK.png",
        "setName": "Champions of Kamigawa",
        "setLink": "https://gatherer.wizards.com/sets/CHK",
        "setCode": "CHK",
        "cardCount": 317,
        "releaseDate": "2004-10-01"
    },
    {
        "imageUrl": "sets/UNH.png",
        "setName": "Unhinged",
        "setLink": "https://gatherer.wizards.com/sets/UNH",
        "setCode": "UNH",
        "cardCount": 142,
        "releaseDate": "2004-11-19"
    },
    {
        "imageUrl": "sets/BOK.png",
        "setName": "Betrayers of Kamigawa",
        "setLink": "https://gatherer.wizards.com/sets/BOK",
        "setCode": "BOK",
        "cardCount": 170,
        "releaseDate": "2005-02-04"
    },
    {
        "imageUrl": "sets/SOK.png",
        "setName": "Saviors of Kamigawa",
        "setLink": "https://gatherer.wizards.com/sets/SOK",
        "setCode": "SOK",
        "cardCount": 170,
        "releaseDate": "2005-06-03"
    },
    {
        "imageUrl": "sets/9ED.png",
        "setName": "Ninth Edition",
        "setLink": "https://gatherer.wizards.com/sets/9ED",
        "setCode": "9ED",
        "cardCount": 359,
        "releaseDate": "2005-07-29"
    },
    {
        "imageUrl": "sets/RAV.png",
        "setName": "Ravnica: City of Guilds",
        "setLink": "https://gatherer.wizards.com/sets/RAV",
        "setCode": "RAV",
        "cardCount": 306,
        "releaseDate": "2005-10-07"
    },
    {
        "imageUrl": "sets/GPT.png",
        "setName": "Guildpact",
        "setLink": "https://gatherer.wizards.com/sets/GPT",
        "setCode": "GPT",
        "cardCount": 165,
        "releaseDate": "2006-02-03"
    },
    {
        "imageUrl": "sets/DIS.png",
        "setName": "Dissension",
        "setLink": "https://gatherer.wizards.com/sets/DIS",
        "setCode": "DIS",
        "cardCount": 190,
        "releaseDate": "2006-05-05"
    },
    {
        "imageUrl": "sets/TSP.png",
        "setName": "Time Spiral",
        "setLink": "https://gatherer.wizards.com/sets/TSP",
        "setCode": "TSP",
        "cardCount": 301,
        "releaseDate": "2006-10-06"
    },
    {
        "imageUrl": "sets/TSB.png",
        "setName": "Time Spiral \"Timeshifted\"",
        "setLink": "https://gatherer.wizards.com/sets/TSB",
        "setCode": "TSB",
        "cardCount": 122,
        "releaseDate": "2006-10-06"
    },
    {
        "imageUrl": "sets/PLC.png",
        "setName": "Planar Chaos",
        "setLink": "https://gatherer.wizards.com/sets/PLC",
        "setCode": "PLC",
        "cardCount": 168,
        "releaseDate": "2007-02-02"
    },
    {
        "imageUrl": "sets/FUT.png",
        "setName": "Future Sight",
        "setLink": "https://gatherer.wizards.com/sets/FUT",
        "setCode": "FUT",
        "cardCount": 180,
        "releaseDate": "2007-05-04"
    },
    {
        "imageUrl": "sets/10E.png",
        "setName": "Tenth Edition",
        "setLink": "https://gatherer.wizards.com/sets/10E",
        "setCode": "10E",
        "cardCount": 383,
        "releaseDate": "2007-07-30"
    },
    {
        "imageUrl": "sets/MED.png",
        "setName": "Masters Edition",
        "setLink": "https://gatherer.wizards.com/sets/MED",
        "setCode": "MED",
        "cardCount": 195,
        "releaseDate": "2007-09-10"
    },
    {
        "imageUrl": "sets/LRW.png",
        "setName": "Lorwyn",
        "setLink": "https://gatherer.wizards.com/sets/LRW",
        "setCode": "LRW",
        "cardCount": 301,
        "releaseDate": "2007-10-12"
    },
    {
        "imageUrl": "sets/EVG.png",
        "setName": "Duel Decks: Elves vs. Goblins",
        "setLink": "https://gatherer.wizards.com/sets/EVG",
        "setCode": "EVG",
        "cardCount": 65,
        "releaseDate": "2007-11-16"
    },
    {
        "imageUrl": "sets/MOR.png",
        "setName": "Morningtide",
        "setLink": "https://gatherer.wizards.com/sets/MOR",
        "setCode": "MOR",
        "cardCount": 150,
        "releaseDate": "2008-02-01"
    },
    {
        "imageUrl": "sets/SHM.png",
        "setName": "Shadowmoor",
        "setLink": "https://gatherer.wizards.com/sets/SHM",
        "setCode": "SHM",
        "cardCount": 301,
        "releaseDate": "2008-05-02"
    },
    {
        "imageUrl": "sets/EVE.png",
        "setName": "Eventide",
        "setLink": "https://gatherer.wizards.com/sets/EVE",
        "setCode": "EVE",
        "cardCount": 180,
        "releaseDate": "2008-07-02"
    },
    {
        "imageUrl": "sets/DRB.png",
        "setName": "From the Vault: Dragons",
        "setLink": "https://gatherer.wizards.com/sets/DRB",
        "setCode": "DRB",
        "cardCount": 15,
        "releaseDate": "2008-08-29"
    },
    {
        "imageUrl": "sets/ME2.png",
        "setName": "Masters Edition II",
        "setLink": "https://gatherer.wizards.com/sets/ME2",
        "setCode": "ME2",
        "cardCount": 245,
        "releaseDate": "2008-09-22"
    },
    {
        "imageUrl": "sets/ALA.png",
        "setName": "Shards of Alara",
        "setLink": "https://gatherer.wizards.com/sets/ALA",
        "setCode": "ALA",
        "cardCount": 249,
        "releaseDate": "2008-10-02"
    },
    {
        "imageUrl": "sets/DD2.png",
        "setName": "Duel Decks: Jace vs. Chandra",
        "setLink": "https://gatherer.wizards.com/sets/DD2",
        "setCode": "DD2",
        "cardCount": 63,
        "releaseDate": "2008-10-31"
    },
    {
        "imageUrl": "sets/CON.png",
        "setName": "Conflux",
        "setLink": "https://gatherer.wizards.com/sets/CON",
        "setCode": "CON",
        "cardCount": 145,
        "releaseDate": "2009-02-06"
    },
    {
        "imageUrl": "sets/DDC.png",
        "setName": "Duel Decks: Divine vs. Demonic",
        "setLink": "https://gatherer.wizards.com/sets/DDC",
        "setCode": "DDC",
        "cardCount": 65,
        "releaseDate": "2009-04-10"
    },
    {
        "imageUrl": "sets/ARB.png",
        "setName": "Alara Reborn",
        "setLink": "https://gatherer.wizards.com/sets/ARB",
        "setCode": "ARB",
        "cardCount": 145,
        "releaseDate": "2009-04-30"
    },
    {
        "imageUrl": "sets/M10.png",
        "setName": "Magic 2010",
        "setLink": "https://gatherer.wizards.com/sets/M10",
        "setCode": "M10",
        "cardCount": 249,
        "releaseDate": "2009-07-17"
    },
    {
        "imageUrl": "sets/V09.png",
        "setName": "From the Vault: Exiled",
        "setLink": "https://gatherer.wizards.com/sets/V09",
        "setCode": "V09",
        "cardCount": 15,
        "releaseDate": "2009-08-12"
    },
    {
        "imageUrl": "sets/HOP.png",
        "setName": "Planechase",
        "setLink": "https://gatherer.wizards.com/sets/HOP",
        "setCode": "HOP",
        "cardCount": 212,
        "releaseDate": "2009-09-04"
    },
    {
        "imageUrl": "sets/ME3.png",
        "setName": "Masters Edition III",
        "setLink": "https://gatherer.wizards.com/sets/ME3",
        "setCode": "ME3",
        "cardCount": 230,
        "releaseDate": "2009-09-07"
    },
    {
        "imageUrl": "sets/ZEN.png",
        "setName": "Zendikar",
        "setLink": "https://gatherer.wizards.com/sets/ZEN",
        "setCode": "ZEN",
        "cardCount": 269,
        "releaseDate": "2009-10-02"
    },
    {
        "imageUrl": "sets/VAN.png",
        "setName": "Vanguard",
        "setLink": "https://gatherer.wizards.com/sets/VAN",
        "setCode": "VAN",
        "cardCount": 116,
        "releaseDate": "2009-10-02"
    },
    {
        "imageUrl": "sets/DDD.png",
        "setName": "Duel Decks: Garruk vs. Liliana",
        "setLink": "https://gatherer.wizards.com/sets/DDD",
        "setCode": "DDD",
        "cardCount": 66,
        "releaseDate": "2009-10-30"
    },
    {
        "imageUrl": "sets/H09.png",
        "setName": "Premium Deck Series: Slivers",
        "setLink": "https://gatherer.wizards.com/sets/H09",
        "setCode": "H09",
        "cardCount": 41,
        "releaseDate": "2009-11-20"
    },
    {
        "imageUrl": "sets/WWK.png",
        "setName": "Worldwake",
        "setLink": "https://gatherer.wizards.com/sets/WWK",
        "setCode": "WWK",
        "cardCount": 145,
        "releaseDate": "2010-01-30"
    },
    {
        "imageUrl": "sets/MBS.png",
        "setName": "Mirrodin Besieged",
        "setLink": "https://gatherer.wizards.com/sets/MBS",
        "setCode": "MBS",
        "cardCount": 155,
        "releaseDate": "2010-02-04"
    },
    {
        "imageUrl": "sets/DDE.png",
        "setName": "Duel Decks: Phyrexia vs. the Coalition",
        "setLink": "https://gatherer.wizards.com/sets/DDE",
        "setCode": "DDE",
        "cardCount": 74,
        "releaseDate": "2010-03-17"
    },
    {
        "imageUrl": "sets/ROE.png",
        "setName": "Rise of the Eldrazi",
        "setLink": "https://gatherer.wizards.com/sets/ROE",
        "setCode": "ROE",
        "cardCount": 248,
        "releaseDate": "2010-04-15"
    },
    {
        "imageUrl": "sets/DDF.png",
        "setName": "Duel Decks: Elspeth vs. Tezzeret",
        "setLink": "https://gatherer.wizards.com/sets/DDF",
        "setCode": "DDF",
        "cardCount": 79,
        "releaseDate": "2010-06-06"
    },
    {
        "imageUrl": "sets/ARC.png",
        "setName": "Archenemy",
        "setLink": "https://gatherer.wizards.com/sets/ARC",
        "setCode": "ARC",
        "cardCount": 196,
        "releaseDate": "2010-06-17"
    },
    {
        "imageUrl": "sets/M11.png",
        "setName": "Magic 2011",
        "setLink": "https://gatherer.wizards.com/sets/M11",
        "setCode": "M11",
        "cardCount": 249,
        "releaseDate": "2010-06-28"
    },
    {
        "imageUrl": "sets/V10.png",
        "setName": "From the Vault: Relics",
        "setLink": "https://gatherer.wizards.com/sets/V10",
        "setCode": "V10",
        "cardCount": 15,
        "releaseDate": "2010-08-12"
    },
    {
        "imageUrl": "sets/SOM.png",
        "setName": "Scars of Mirrodin",
        "setLink": "https://gatherer.wizards.com/sets/SOM",
        "setCode": "SOM",
        "cardCount": 249,
        "releaseDate": "2010-09-23"
    },
    {
        "imageUrl": "sets/ME4.png",
        "setName": "Masters Edition IV",
        "setLink": "https://gatherer.wizards.com/sets/ME4",
        "setCode": "ME4",
        "cardCount": 269,
        "releaseDate": "2010-11-18"
    },
    {
        "imageUrl": "sets/PD2.png",
        "setName": "Premium Deck Series: Fire and Lightning",
        "setLink": "https://gatherer.wizards.com/sets/PD2",
        "setCode": "PD2",
        "cardCount": 34,
        "releaseDate": "2010-11-18"
    },
    {
        "imageUrl": "sets/DDG.png",
        "setName": "Duel Decks: Knights vs. Dragons",
        "setLink": "https://gatherer.wizards.com/sets/DDG",
        "setCode": "DDG",
        "cardCount": 81,
        "releaseDate": "2011-03-30"
    },
    {
        "imageUrl": "sets/NPH.png",
        "setName": "New Phyrexia",
        "setLink": "https://gatherer.wizards.com/sets/NPH",
        "setCode": "NPH",
        "cardCount": 175,
        "releaseDate": "2011-05-13"
    },
    {
        "imageUrl": "sets/CMD.png",
        "setName": "Magic: The Gathering-Commander",
        "setLink": "https://gatherer.wizards.com/sets/CMD",
        "setCode": "CMD",
        "cardCount": 320,
        "releaseDate": "2011-06-01"
    },
    {
        "imageUrl": "sets/M12.png",
        "setName": "Magic 2012",
        "setLink": "https://gatherer.wizards.com/sets/M12",
        "setCode": "M12",
        "cardCount": 249,
        "releaseDate": "2011-07-15"
    },
    {
        "imageUrl": "sets/V11.png",
        "setName": "From the Vault: Legends",
        "setLink": "https://gatherer.wizards.com/sets/V11",
        "setCode": "V11",
        "cardCount": 15,
        "releaseDate": "2011-08-25"
    },
    {
        "imageUrl": "sets/DDH.png",
        "setName": "Duel Decks: Ajani vs. Nicol Bolas",
        "setLink": "https://gatherer.wizards.com/sets/DDH",
        "setCode": "DDH",
        "cardCount": 83,
        "releaseDate": "2011-09-01"
    },
    {
        "imageUrl": "sets/ISD.png",
        "setName": "Innistrad",
        "setLink": "https://gatherer.wizards.com/sets/ISD",
        "setCode": "ISD",
        "cardCount": 284,
        "releaseDate": "2011-09-23"
    },
    {
        "imageUrl": "sets/PD3.png",
        "setName": "Premium Deck Series: Graveborn",
        "setLink": "https://gatherer.wizards.com/sets/PD3",
        "setCode": "PD3",
        "cardCount": 30,
        "releaseDate": "2011-11-01"
    },
    {
        "imageUrl": "sets/DKA.png",
        "setName": "Dark Ascension",
        "setLink": "https://gatherer.wizards.com/sets/DKA",
        "setCode": "DKA",
        "cardCount": 171,
        "releaseDate": "2012-02-03"
    },
    {
        "imageUrl": "sets/DDI.png",
        "setName": "Duel Decks: Venser vs. Koth",
        "setLink": "https://gatherer.wizards.com/sets/DDI",
        "setCode": "DDI",
        "cardCount": 77,
        "releaseDate": "2012-03-29"
    },
    {
        "imageUrl": "sets/AVR.png",
        "setName": "Avacyn Restored",
        "setLink": "https://gatherer.wizards.com/sets/AVR",
        "setCode": "AVR",
        "cardCount": 244,
        "releaseDate": "2012-05-04"
    },
    {
        "imageUrl": "sets/PC2.png",
        "setName": "Planechase 2012 Edition",
        "setLink": "https://gatherer.wizards.com/sets/PC2",
        "setCode": "PC2",
        "cardCount": 197,
        "releaseDate": "2012-05-31"
    },
    {
        "imageUrl": "sets/M13.png",
        "setName": "Magic 2013",
        "setLink": "https://gatherer.wizards.com/sets/M13",
        "setCode": "M13",
        "cardCount": 249,
        "releaseDate": "2012-07-05"
    },
    {
        "imageUrl": "sets/V12.png",
        "setName": "From the Vault: Realms",
        "setLink": "https://gatherer.wizards.com/sets/V12",
        "setCode": "V12",
        "cardCount": 15,
        "releaseDate": "2012-08-27"
    },
    {
        "imageUrl": "sets/DDJ.png",
        "setName": "Duel Decks: Izzet vs. Golgari",
        "setLink": "https://gatherer.wizards.com/sets/DDJ",
        "setCode": "DDJ",
        "cardCount": 92,
        "releaseDate": "2012-09-03"
    },
    {
        "imageUrl": "sets/RTR.png",
        "setName": "Return to Ravnica",
        "setLink": "https://gatherer.wizards.com/sets/RTR",
        "setCode": "RTR",
        "cardCount": 274,
        "releaseDate": "2012-10-05"
    },
    {
        "imageUrl": "sets/CM1.png",
        "setName": "Commander's Arsenal",
        "setLink": "https://gatherer.wizards.com/sets/CM1",
        "setCode": "CM1",
        "cardCount": 18,
        "releaseDate": "2012-11-01"
    },
    {
        "imageUrl": "sets/GTC.png",
        "setName": "Gatecrash",
        "setLink": "https://gatherer.wizards.com/sets/GTC",
        "setCode": "GTC",
        "cardCount": 249,
        "releaseDate": "2013-02-01"
    },
    {
        "imageUrl": "sets/DDK.png",
        "setName": "Duel Decks: Sorin vs. Tibalt",
        "setLink": "https://gatherer.wizards.com/sets/DDK",
        "setCode": "DDK",
        "cardCount": 80,
        "releaseDate": "2013-03-14"
    },
    {
        "imageUrl": "sets/DGM.png",
        "setName": "Dragon's Maze",
        "setLink": "https://gatherer.wizards.com/sets/DGM",
        "setCode": "DGM",
        "cardCount": 171,
        "releaseDate": "2013-05-01"
    },
    {
        "imageUrl": "sets/MMA.png",
        "setName": "Modern Masters",
        "setLink": "https://gatherer.wizards.com/sets/MMA",
        "setCode": "MMA",
        "cardCount": 229,
        "releaseDate": "2013-06-07"
    },
    {
        "imageUrl": "sets/M14.png",
        "setName": "Magic 2014 Core Set",
        "setLink": "https://gatherer.wizards.com/sets/M14",
        "setCode": "M14",
        "cardCount": 249,
        "releaseDate": "2013-07-19"
    },
    {
        "imageUrl": "sets/THS.png",
        "setName": "Theros",
        "setLink": "https://gatherer.wizards.com/sets/THS",
        "setCode": "THS",
        "cardCount": 249,
        "releaseDate": "2013-09-27"
    },
    {
        "imageUrl": "sets/DDL.png",
        "setName": "Duel Decks: Heroes vs. Monsters",
        "setLink": "https://gatherer.wizards.com/sets/DDL",
        "setCode": "DDL",
        "cardCount": 81,
        "releaseDate": "2013-09-27"
    },
    {
        "imageUrl": "sets/V13.png",
        "setName": "From the Vault: Twenty",
        "setLink": "https://gatherer.wizards.com/sets/V13",
        "setCode": "V13",
        "cardCount": 20,
        "releaseDate": "2013-09-27"
    },
    {
        "imageUrl": "sets/C13.png",
        "setName": "Commander 2013 Edition",
        "setLink": "https://gatherer.wizards.com/sets/C13",
        "setCode": "C13",
        "cardCount": 357,
        "releaseDate": "2013-10-29"
    },
    {
        "imageUrl": "sets/BNG.png",
        "setName": "Born of the Gods",
        "setLink": "https://gatherer.wizards.com/sets/BNG",
        "setCode": "BNG",
        "cardCount": 165,
        "releaseDate": "2014-02-02"
    },
    {
        "imageUrl": "sets/DDM.png",
        "setName": "Duel Decks: Jace vs. Vraska",
        "setLink": "https://gatherer.wizards.com/sets/DDM",
        "setCode": "DDM",
        "cardCount": 88,
        "releaseDate": "2014-02-25"
    },
    {
        "imageUrl": "sets/JOU.png",
        "setName": "Journey into Nyx",
        "setLink": "https://gatherer.wizards.com/sets/JOU",
        "setCode": "JOU",
        "cardCount": 165,
        "releaseDate": "2014-04-22"
    },
    {
        "imageUrl": "sets/MD1.png",
        "setName": "Modern Event Deck 2014",
        "setLink": "https://gatherer.wizards.com/sets/MD1",
        "setCode": "MD1",
        "cardCount": 26,
        "releaseDate": "2014-05-13"
    },
    {
        "imageUrl": "sets/VMA.png",
        "setName": "Vintage Masters",
        "setLink": "https://gatherer.wizards.com/sets/VMA",
        "setCode": "VMA",
        "cardCount": 325,
        "releaseDate": "2014-05-21"
    },
    {
        "imageUrl": "sets/CNS.png",
        "setName": "Magic: The Gathering—Conspiracy",
        "setLink": "https://gatherer.wizards.com/sets/CNS",
        "setCode": "CNS",
        "cardCount": 210,
        "releaseDate": "2014-05-21"
    },
    {
        "imageUrl": "sets/M15.png",
        "setName": "Magic 2015 Core Set",
        "setLink": "https://gatherer.wizards.com/sets/M15",
        "setCode": "M15",
        "cardCount": 284,
        "releaseDate": "2014-07-01"
    },
    {
        "imageUrl": "sets/V14.png",
        "setName": "From the Vault: Annihilation (2014)",
        "setLink": "https://gatherer.wizards.com/sets/V14",
        "setCode": "V14",
        "cardCount": 15,
        "releaseDate": "2014-08-01"
    },
    {
        "imageUrl": "sets/DDN.png",
        "setName": "Duel Decks: Speed vs. Cunning",
        "setLink": "https://gatherer.wizards.com/sets/DDN",
        "setCode": "DDN",
        "cardCount": 82,
        "releaseDate": "2014-08-26"
    },
    {
        "imageUrl": "sets/KTK.png",
        "setName": "Khans of Tarkir",
        "setLink": "https://gatherer.wizards.com/sets/KTK",
        "setCode": "KTK",
        "cardCount": 269,
        "releaseDate": "2014-09-16"
    },
    {
        "imageUrl": "sets/C14.png",
        "setName": "Commander 2014",
        "setLink": "https://gatherer.wizards.com/sets/C14",
        "setCode": "C14",
        "cardCount": 337,
        "releaseDate": "2014-11-07"
    },
    {
        "imageUrl": "sets/FRF.png",
        "setName": "Fate Reforged",
        "setLink": "https://gatherer.wizards.com/sets/FRF",
        "setCode": "FRF",
        "cardCount": 185,
        "releaseDate": "2015-01-07"
    },
    {
        "imageUrl": "sets/DD3_EVG.png",
        "setName": "Duel Decks Anthology, Elves vs. Goblins",
        "setLink": "https://gatherer.wizards.com/sets/DD3_EVG",
        "setCode": "DD3_EVG",
        "cardCount": 62,
        "releaseDate": "2015-01-27"
    },
    {
        "imageUrl": "sets/DD3_JVC.png",
        "setName": "Duel Decks Anthology, Jace vs. Chandra",
        "setLink": "https://gatherer.wizards.com/sets/DD3_JVC",
        "setCode": "DD3_JVC",
        "cardCount": 62,
        "releaseDate": "2015-01-27"
    },
    {
        "imageUrl": "sets/DD3_DVD.png",
        "setName": "Duel Decks Anthology, Divine vs. Demonic",
        "setLink": "https://gatherer.wizards.com/sets/DD3_DVD",
        "setCode": "DD3_DVD",
        "cardCount": 62,
        "releaseDate": "2015-01-27"
    },
    {
        "imageUrl": "sets/DD3_GVL.png",
        "setName": "Duel Decks Anthology, Garruk vs. Liliana",
        "setLink": "https://gatherer.wizards.com/sets/DD3_GVL",
        "setCode": "DD3_GVL",
        "cardCount": 63,
        "releaseDate": "2015-01-27"
    },
    {
        "imageUrl": "sets/FRF_UGIN.png",
        "setName": "Ugin's Fate promos",
        "setLink": "https://gatherer.wizards.com/sets/FRF_UGIN",
        "setCode": "FRF_UGIN",
        "cardCount": 26,
        "releaseDate": "2015-02-09"
    },
    {
        "imageUrl": "sets/DDO.png",
        "setName": "Duel Decks: Elspeth vs. Kiora",
        "setLink": "https://gatherer.wizards.com/sets/DDO",
        "setCode": "DDO",
        "cardCount": 65,
        "releaseDate": "2015-02-18"
    },
    {
        "imageUrl": "sets/DTK.png",
        "setName": "Dragons of Tarkir",
        "setLink": "https://gatherer.wizards.com/sets/DTK",
        "setCode": "DTK",
        "cardCount": 264,
        "releaseDate": "2015-03-03"
    },
    {
        "imageUrl": "sets/TPR.png",
        "setName": "Tempest Remastered",
        "setLink": "https://gatherer.wizards.com/sets/TPR",
        "setCode": "TPR",
        "cardCount": 269,
        "releaseDate": "2015-03-31"
    },
    {
        "imageUrl": "sets/MM2.png",
        "setName": "Modern Masters 2015 Edition",
        "setLink": "https://gatherer.wizards.com/sets/MM2",
        "setCode": "MM2",
        "cardCount": 249,
        "releaseDate": "2015-04-17"
    },
    {
        "imageUrl": "sets/ORI.png",
        "setName": "Magic Origins",
        "setLink": "https://gatherer.wizards.com/sets/ORI",
        "setCode": "ORI",
        "cardCount": 293,
        "releaseDate": "2015-06-29"
    },
    {
        "imageUrl": "sets/V15.png",
        "setName": "From the Vault: Angels",
        "setLink": "https://gatherer.wizards.com/sets/V15",
        "setCode": "V15",
        "cardCount": 15,
        "releaseDate": "2015-08-20"
    },
    {
        "imageUrl": "sets/DDP.png",
        "setName": "Duel Decks: Zendikar vs. Eldrazi",
        "setLink": "https://gatherer.wizards.com/sets/DDP",
        "setCode": "DDP",
        "cardCount": 75,
        "releaseDate": "2015-08-26"
    },
    {
        "imageUrl": "sets/BFZ.png",
        "setName": "Battle for Zendikar",
        "setLink": "https://gatherer.wizards.com/sets/BFZ",
        "setCode": "BFZ",
        "cardCount": 299,
        "releaseDate": "2015-09-14"
    },
    {
        "imageUrl": "sets/EXP.png",
        "setName": "Zendikar Expeditions",
        "setLink": "https://gatherer.wizards.com/sets/EXP",
        "setCode": "EXP",
        "cardCount": 45,
        "releaseDate": "2015-09-14"
    },
    {
        "imageUrl": "sets/C15.png",
        "setName": "Commander 2015",
        "setLink": "https://gatherer.wizards.com/sets/C15",
        "setCode": "C15",
        "cardCount": 342,
        "releaseDate": "2015-10-26"
    },
    {
        "imageUrl": "sets/OGW.png",
        "setName": "Oath of the Gatewatch",
        "setLink": "https://gatherer.wizards.com/sets/OGW",
        "setCode": "OGW",
        "cardCount": 186,
        "releaseDate": "2015-12-22"
    },
    {
        "imageUrl": "sets/DDQ.png",
        "setName": "Duel Decks: Blessed vs. Cursed",
        "setLink": "https://gatherer.wizards.com/sets/DDQ",
        "setCode": "DDQ",
        "cardCount": 77,
        "releaseDate": "2016-02-17"
    },
    {
        "imageUrl": "sets/W16.png",
        "setName": "Welcome Deck 2016",
        "setLink": "https://gatherer.wizards.com/sets/W16",
        "setCode": "W16",
        "cardCount": 16,
        "releaseDate": "2016-03-16"
    },
    {
        "imageUrl": "sets/SOI.png",
        "setName": "Shadows over Innistrad",
        "setLink": "https://gatherer.wizards.com/sets/SOI",
        "setCode": "SOI",
        "cardCount": 330,
        "releaseDate": "2016-03-16"
    },
    {
        "imageUrl": "sets/EMN.png",
        "setName": "Eldritch Moon",
        "setLink": "https://gatherer.wizards.com/sets/EMN",
        "setCode": "EMN",
        "cardCount": 223,
        "releaseDate": "2016-04-19"
    },
    {
        "imageUrl": "sets/EMA.png",
        "setName": "Eternal Masters",
        "setLink": "https://gatherer.wizards.com/sets/EMA",
        "setCode": "EMA",
        "cardCount": 249,
        "releaseDate": "2016-05-16"
    },
    {
        "imageUrl": "sets/V16.png",
        "setName": "From the Vault: Lore",
        "setLink": "https://gatherer.wizards.com/sets/V16",
        "setCode": "V16",
        "cardCount": 15,
        "releaseDate": "2016-07-21"
    },
    {
        "imageUrl": "sets/CN2.png",
        "setName": "Conspiracy: Take the Crown",
        "setLink": "https://gatherer.wizards.com/sets/CN2",
        "setCode": "CN2",
        "cardCount": 222,
        "releaseDate": "2016-07-22"
    },
    {
        "imageUrl": "sets/DDR.png",
        "setName": "Duel Decks: Nissa vs. Ob Nixilis",
        "setLink": "https://gatherer.wizards.com/sets/DDR",
        "setCode": "DDR",
        "cardCount": 72,
        "releaseDate": "2016-08-24"
    },
    {
        "imageUrl": "sets/MPS_KLD.png",
        "setName": "Masterpiece Series: Kaladesh Inventions",
        "setLink": "https://gatherer.wizards.com/sets/MPS_KLD",
        "setCode": "MPS_KLD",
        "cardCount": 54,
        "releaseDate": "2016-09-06"
    },
    {
        "imageUrl": "sets/KLD.png",
        "setName": "Kaladesh",
        "setLink": "https://gatherer.wizards.com/sets/KLD",
        "setCode": "KLD",
        "cardCount": 274,
        "releaseDate": "2016-09-19"
    },
    {
        "imageUrl": "sets/C16.png",
        "setName": "Commander 2016",
        "setLink": "https://gatherer.wizards.com/sets/C16",
        "setCode": "C16",
        "cardCount": 353,
        "releaseDate": "2016-11-01"
    },
    {
        "imageUrl": "sets/PCA.png",
        "setName": "Planechase Anthology",
        "setLink": "https://gatherer.wizards.com/sets/PCA",
        "setCode": "PCA",
        "cardCount": 242,
        "releaseDate": "2016-11-15"
    },
    {
        "imageUrl": "sets/AER.png",
        "setName": "Aether Revolt",
        "setLink": "https://gatherer.wizards.com/sets/AER",
        "setCode": "AER",
        "cardCount": 194,
        "releaseDate": "2017-01-03"
    },
    {
        "imageUrl": "sets/MM3.png",
        "setName": "Modern Masters 2017 Edition",
        "setLink": "https://gatherer.wizards.com/sets/MM3",
        "setCode": "MM3",
        "cardCount": 249,
        "releaseDate": "2017-02-06"
    },
    {
        "imageUrl": "sets/DDS.png",
        "setName": "Duel Decks: Mind vs. Might",
        "setLink": "https://gatherer.wizards.com/sets/DDS",
        "setCode": "DDS",
        "cardCount": 65,
        "releaseDate": "2017-03-08"
    },
    {
        "imageUrl": "sets/W17.png",
        "setName": "Welcome Deck 2017",
        "setLink": "https://gatherer.wizards.com/sets/W17",
        "setCode": "W17",
        "cardCount": 30,
        "releaseDate": "2017-03-23"
    },
    {
        "imageUrl": "sets/AKH.png",
        "setName": "Amonkhet",
        "setLink": "https://gatherer.wizards.com/sets/AKH",
        "setCode": "AKH",
        "cardCount": 302,
        "releaseDate": "2017-04-11"
    },
    {
        "imageUrl": "sets/CMA.png",
        "setName": "Commander Anthology",
        "setLink": "https://gatherer.wizards.com/sets/CMA",
        "setCode": "CMA",
        "cardCount": 320,
        "releaseDate": "2017-05-09"
    },
    {
        "imageUrl": "sets/E01.png",
        "setName": "Archenemy: Nicol Bolas",
        "setLink": "https://gatherer.wizards.com/sets/E01",
        "setCode": "E01",
        "cardCount": 126,
        "releaseDate": "2017-05-10"
    },
    {
        "imageUrl": "sets/XLN.png",
        "setName": "Ixalan",
        "setLink": "https://gatherer.wizards.com/sets/XLN",
        "setCode": "XLN",
        "cardCount": 299,
        "releaseDate": "2017-06-01"
    },
    {
        "imageUrl": "sets/MPS_AKH.png",
        "setName": "Masterpiece Series: Amonkhet Invocations",
        "setLink": "https://gatherer.wizards.com/sets/MPS_AKH",
        "setCode": "MPS_AKH",
        "cardCount": 54,
        "releaseDate": "2017-06-12"
    },
    {
        "imageUrl": "sets/HOU.png",
        "setName": "Hour of Devastation",
        "setLink": "https://gatherer.wizards.com/sets/HOU",
        "setCode": "HOU",
        "cardCount": 219,
        "releaseDate": "2017-06-12"
    },
    {
        "imageUrl": "sets/C17.png",
        "setName": "Commander 2017",
        "setLink": "https://gatherer.wizards.com/sets/C17",
        "setCode": "C17",
        "cardCount": 309,
        "releaseDate": "2017-07-25"
    },
    {
        "imageUrl": "sets/DDT.png",
        "setName": "Duel Decks: Merfolk vs. Goblins",
        "setLink": "https://gatherer.wizards.com/sets/DDT",
        "setCode": "DDT",
        "cardCount": 63,
        "releaseDate": "2017-10-06"
    },
    {
        "imageUrl": "sets/IMA.png",
        "setName": "Iconic Masters",
        "setLink": "https://gatherer.wizards.com/sets/IMA",
        "setCode": "IMA",
        "cardCount": 249,
        "releaseDate": "2017-10-10"
    },
    {
        "imageUrl": "sets/V17.png",
        "setName": "From the Vault: Transform",
        "setLink": "https://gatherer.wizards.com/sets/V17",
        "setCode": "V17",
        "cardCount": 29,
        "releaseDate": "2017-10-10"
    },
    {
        "imageUrl": "sets/E02.png",
        "setName": "Explorers of Ixalan",
        "setLink": "https://gatherer.wizards.com/sets/E02",
        "setCode": "E02",
        "cardCount": 47,
        "releaseDate": "2017-10-12"
    },
    {
        "imageUrl": "sets/UST.png",
        "setName": "Unstable",
        "setLink": "https://gatherer.wizards.com/sets/UST",
        "setCode": "UST",
        "cardCount": 268,
        "releaseDate": "2017-10-24"
    },
    {
        "imageUrl": "sets/RIX.png",
        "setName": "Rivals of Ixalan",
        "setLink": "https://gatherer.wizards.com/sets/RIX",
        "setCode": "RIX",
        "cardCount": 212,
        "releaseDate": "2017-12-22"
    },
    {
        "imageUrl": "sets/A25.png",
        "setName": "Masters 25",
        "setLink": "https://gatherer.wizards.com/sets/A25",
        "setCode": "A25",
        "cardCount": 249,
        "releaseDate": "2018-02-05"
    },
    {
        "imageUrl": "sets/DDU.png",
        "setName": "Duel Decks: Elves vs. Inventors",
        "setLink": "https://gatherer.wizards.com/sets/DDU",
        "setCode": "DDU",
        "cardCount": 76,
        "releaseDate": "2018-03-20"
    },
    {
        "imageUrl": "sets/DOM.png",
        "setName": "Dominaria",
        "setLink": "https://gatherer.wizards.com/sets/DOM",
        "setCode": "DOM",
        "cardCount": 280,
        "releaseDate": "2018-04-02"
    },
    {
        "imageUrl": "sets/BBD.png",
        "setName": "Battlebond",
        "setLink": "https://gatherer.wizards.com/sets/BBD",
        "setCode": "BBD",
        "cardCount": 256,
        "releaseDate": "2018-05-10"
    },
    {
        "imageUrl": "sets/CM2.png",
        "setName": "Commander Anthology 2018",
        "setLink": "https://gatherer.wizards.com/sets/CM2",
        "setCode": "CM2",
        "cardCount": 313,
        "releaseDate": "2018-05-31"
    },
    {
        "imageUrl": "sets/SS1.png",
        "setName": "Signature Spellbook: Jace",
        "setLink": "https://gatherer.wizards.com/sets/SS1",
        "setCode": "SS1",
        "cardCount": 8,
        "releaseDate": "2018-06-01"
    },
    {
        "imageUrl": "sets/GS1.png",
        "setName": "Global Series: Jiang Yanggu and Mu Yanling",
        "setLink": "https://gatherer.wizards.com/sets/GS1",
        "setCode": "GS1",
        "cardCount": 40,
        "releaseDate": "2018-06-07"
    },
    {
        "imageUrl": "sets/M19.png",
        "setName": "Core Set 2019",
        "setLink": "https://gatherer.wizards.com/sets/M19",
        "setCode": "M19",
        "cardCount": 315,
        "releaseDate": "2018-06-21"
    },
    {
        "imageUrl": "sets/C18.png",
        "setName": "Commander 2018",
        "setLink": "https://gatherer.wizards.com/sets/C18",
        "setCode": "C18",
        "cardCount": 308,
        "releaseDate": "2018-07-25"
    },
    {
        "imageUrl": "sets/GRN.png",
        "setName": "Guilds of Ravnica",
        "setLink": "https://gatherer.wizards.com/sets/GRN",
        "setCode": "GRN",
        "cardCount": 283,
        "releaseDate": "2018-09-19"
    },
    {
        "imageUrl": "sets/GK1_DIMIR.png",
        "setName": "Guild Kit: Dimir",
        "setLink": "https://gatherer.wizards.com/sets/GK1_DIMIR",
        "setCode": "GK1_DIMIR",
        "cardCount": 25,
        "releaseDate": "2018-09-26"
    },
    {
        "imageUrl": "sets/GK1_SELESN.png",
        "setName": "Guild Kit: Selesnya",
        "setLink": "https://gatherer.wizards.com/sets/GK1_SELESN",
        "setCode": "GK1_SELESN",
        "cardCount": 26,
        "releaseDate": "2018-09-26"
    },
    {
        "imageUrl": "sets/GK1_BOROS.png",
        "setName": "Guild Kit: Boros",
        "setLink": "https://gatherer.wizards.com/sets/GK1_BOROS",
        "setCode": "GK1_BOROS",
        "cardCount": 25,
        "releaseDate": "2018-09-26"
    },
    {
        "imageUrl": "sets/GK1_GOLGAR.png",
        "setName": "Guild Kit: Golgari",
        "setLink": "https://gatherer.wizards.com/sets/GK1_GOLGAR",
        "setCode": "GK1_GOLGAR",
        "cardCount": 27,
        "releaseDate": "2018-09-26"
    },
    {
        "imageUrl": "sets/GK1_IZZET.png",
        "setName": "Guild Kit: Izzet",
        "setLink": "https://gatherer.wizards.com/sets/GK1_IZZET",
        "setCode": "GK1_IZZET",
        "cardCount": 25,
        "releaseDate": "2018-09-26"
    },
    {
        "imageUrl": "sets/GNT.png",
        "setName": "Game Night",
        "setLink": "https://gatherer.wizards.com/sets/GNT",
        "setCode": "GNT",
        "cardCount": 68,
        "releaseDate": "2018-10-24"
    },
    {
        "imageUrl": "sets/G18.png",
        "setName": "Gift Pack",
        "setLink": "https://gatherer.wizards.com/sets/G18",
        "setCode": "G18",
        "cardCount": 5,
        "releaseDate": "2018-10-29"
    },
    {
        "imageUrl": "sets/MPS_GRN.png",
        "setName": "Guilds of Ravnica Mythic Edition",
        "setLink": "https://gatherer.wizards.com/sets/MPS_GRN",
        "setCode": "MPS_GRN",
        "cardCount": 8,
        "releaseDate": "2018-11-07"
    },
    {
        "imageUrl": "sets/UMA.png",
        "setName": "Ultimate Masters",
        "setLink": "https://gatherer.wizards.com/sets/UMA",
        "setCode": "UMA",
        "cardCount": 255,
        "releaseDate": "2018-11-14"
    },
    {
        "imageUrl": "sets/UMA_BOX.png",
        "setName": "Ultimate Box Toppers",
        "setLink": "https://gatherer.wizards.com/sets/UMA_BOX",
        "setCode": "UMA_BOX",
        "cardCount": 40,
        "releaseDate": "2018-11-14"
    },
    {
        "imageUrl": "sets/MPS_RNA.png",
        "setName": "Ravnica Allegiance Mythic Edition",
        "setLink": "https://gatherer.wizards.com/sets/MPS_RNA",
        "setCode": "MPS_RNA",
        "cardCount": 8,
        "releaseDate": "2019-01-03"
    },
    {
        "imageUrl": "sets/RNA.png",
        "setName": "Ravnica Allegiance",
        "setLink": "https://gatherer.wizards.com/sets/RNA",
        "setCode": "RNA",
        "cardCount": 283,
        "releaseDate": "2019-01-03"
    },
    {
        "imageUrl": "sets/GK2_GRUUL.png",
        "setName": "Guild Kit: Gruul",
        "setLink": "https://gatherer.wizards.com/sets/GK2_GRUUL",
        "setCode": "GK2_GRUUL",
        "cardCount": 27,
        "releaseDate": "2019-02-04"
    },
    {
        "imageUrl": "sets/GK2_RAKDOS.png",
        "setName": "Guild Kit: Rakdos",
        "setLink": "https://gatherer.wizards.com/sets/GK2_RAKDOS",
        "setCode": "GK2_RAKDOS",
        "cardCount": 28,
        "releaseDate": "2019-02-04"
    },
    {
        "imageUrl": "sets/GK2_SIMIC.png",
        "setName": "Guild Kit: Simic",
        "setLink": "https://gatherer.wizards.com/sets/GK2_SIMIC",
        "setCode": "GK2_SIMIC",
        "cardCount": 27,
        "releaseDate": "2019-02-04"
    },
    {
        "imageUrl": "sets/GK2_AZORIU.png",
        "setName": "Guild Kit: Azorius",
        "setLink": "https://gatherer.wizards.com/sets/GK2_AZORIU",
        "setCode": "GK2_AZORIU",
        "cardCount": 27,
        "releaseDate": "2019-02-04"
    },
    {
        "imageUrl": "sets/GK2_ORZHOV.png",
        "setName": "Guild Kit: Orzhov",
        "setLink": "https://gatherer.wizards.com/sets/GK2_ORZHOV",
        "setCode": "GK2_ORZHOV",
        "cardCount": 24,
        "releaseDate": "2019-02-04"
    },
    {
        "imageUrl": "sets/WAR.png",
        "setName": "War of the Spark",
        "setLink": "https://gatherer.wizards.com/sets/WAR",
        "setCode": "WAR",
        "cardCount": 275,
        "releaseDate": "2019-04-11"
    },
    {
        "imageUrl": "sets/MPS_WAR.png",
        "setName": "War of the Spark Mythic Edition",
        "setLink": "https://gatherer.wizards.com/sets/MPS_WAR",
        "setCode": "MPS_WAR",
        "cardCount": 8,
        "releaseDate": "2019-04-15"
    },
    {
        "imageUrl": "sets/MH1.png",
        "setName": "Modern Horizons",
        "setLink": "https://gatherer.wizards.com/sets/MH1",
        "setCode": "MH1",
        "cardCount": 255,
        "releaseDate": "2019-05-15"
    },
    {
        "imageUrl": "sets/M20.png",
        "setName": "Core Set 2020",
        "setLink": "https://gatherer.wizards.com/sets/M20",
        "setCode": "M20",
        "cardCount": 344,
        "releaseDate": "2019-06-27"
    },
    {
        "imageUrl": "sets/SS2.png",
        "setName": "Signature Spellbook: Gideon",
        "setLink": "https://gatherer.wizards.com/sets/SS2",
        "setCode": "SS2",
        "cardCount": 8,
        "releaseDate": "2019-07-16"
    },
    {
        "imageUrl": "sets/C19.png",
        "setName": "Commander 2019",
        "setLink": "https://gatherer.wizards.com/sets/C19",
        "setCode": "C19",
        "cardCount": 305,
        "releaseDate": "2019-08-14"
    },
    {
        "imageUrl": "sets/ELD.png",
        "setName": "Throne of Eldraine",
        "setLink": "https://gatherer.wizards.com/sets/ELD",
        "setCode": "ELD",
        "cardCount": 331,
        "releaseDate": "2019-09-11"
    },
    {
        "imageUrl": "sets/GN2.png",
        "setName": "Game Night 2019",
        "setLink": "https://gatherer.wizards.com/sets/GN2",
        "setCode": "GN2",
        "cardCount": 64,
        "releaseDate": "2019-11-04"
    },
    {
        "imageUrl": "sets/MB1.png",
        "setName": "Mystery Booster",
        "setLink": "https://gatherer.wizards.com/sets/MB1",
        "setCode": "MB1",
        "cardCount": 121,
        "releaseDate": "2019-11-06"
    },
    {
        "imageUrl": "sets/THB.png",
        "setName": "Theros Beyond Death",
        "setLink": "https://gatherer.wizards.com/sets/THB",
        "setCode": "THB",
        "cardCount": 283,
        "releaseDate": "2020-01-09"
    },
    {
        "imageUrl": "sets/SLD.png",
        "setName": "Secret Lair Drop",
        "setLink": "https://gatherer.wizards.com/sets/SLD",
        "setCode": "SLD",
        "cardCount": 144,
        "releaseDate": "2020-01-29"
    },
    {
        "imageUrl": "sets/UND.png",
        "setName": "Unsanctioned",
        "setLink": "https://gatherer.wizards.com/sets/UND",
        "setCode": "UND",
        "cardCount": 96,
        "releaseDate": "2020-02-13"
    },
    {
        "imageUrl": "sets/IKO.png",
        "setName": "Ikoria: Lair of Behemoths",
        "setLink": "https://gatherer.wizards.com/sets/IKO",
        "setCode": "IKO",
        "cardCount": 289,
        "releaseDate": "2020-04-10"
    },
    {
        "imageUrl": "sets/C20.png",
        "setName": "Ikoria Commander",
        "setLink": "https://gatherer.wizards.com/sets/C20",
        "setCode": "C20",
        "cardCount": 323,
        "releaseDate": "2020-04-12"
    },
    {
        "imageUrl": "sets/JMP.png",
        "setName": "Jumpstart",
        "setLink": "https://gatherer.wizards.com/sets/JMP",
        "setCode": "JMP",
        "cardCount": 495,
        "releaseDate": "2020-06-16"
    },
    {
        "imageUrl": "sets/M21.png",
        "setName": "Core Set 2021",
        "setLink": "https://gatherer.wizards.com/sets/M21",
        "setCode": "M21",
        "cardCount": 391,
        "releaseDate": "2020-06-17"
    },
    {
        "imageUrl": "sets/2XM.png",
        "setName": "Double Masters",
        "setLink": "https://gatherer.wizards.com/sets/2XM",
        "setCode": "2XM",
        "cardCount": 382,
        "releaseDate": "2020-07-22"
    },
    {
        "imageUrl": "sets/ZNR.png",
        "setName": "Zendikar Rising",
        "setLink": "https://gatherer.wizards.com/sets/ZNR",
        "setCode": "ZNR",
        "cardCount": 436,
        "releaseDate": "2020-08-07"
    },
    {
        "imageUrl": "sets/ZNE.png",
        "setName": "Zendikar Rising Expeditions",
        "setLink": "https://gatherer.wizards.com/sets/ZNE",
        "setCode": "ZNE",
        "cardCount": 30,
        "releaseDate": "2020-08-07"
    },
    {
        "imageUrl": "sets/ZNC.png",
        "setName": "Zendikar Rising Commander",
        "setLink": "https://gatherer.wizards.com/sets/ZNC",
        "setCode": "ZNC",
        "cardCount": 144,
        "releaseDate": "2020-08-07"
    },
    {
        "imageUrl": "sets/CMR.png",
        "setName": "Commander Legends",
        "setLink": "https://gatherer.wizards.com/sets/CMR",
        "setCode": "CMR",
        "cardCount": 718,
        "releaseDate": "2020-11-09"
    },
    {
        "imageUrl": "sets/KHC.png",
        "setName": "Kaldheim Commander",
        "setLink": "https://gatherer.wizards.com/sets/KHC",
        "setCode": "KHC",
        "cardCount": 119,
        "releaseDate": "2021-01-06"
    },
    {
        "imageUrl": "sets/KHM.png",
        "setName": "Kaldheim",
        "setLink": "https://gatherer.wizards.com/sets/KHM",
        "setCode": "KHM",
        "cardCount": 432,
        "releaseDate": "2021-01-06"
    },
    {
        "imageUrl": "sets/CC1.png",
        "setName": "Commander Collection: Green",
        "setLink": "https://gatherer.wizards.com/sets/CC1",
        "setCode": "CC1",
        "cardCount": 8,
        "releaseDate": "2021-01-31"
    },
    {
        "imageUrl": "sets/TSR.png",
        "setName": "Time Spiral Remastered",
        "setLink": "https://gatherer.wizards.com/sets/TSR",
        "setCode": "TSR",
        "cardCount": 414,
        "releaseDate": "2021-02-25"
    },
    {
        "imageUrl": "sets/STX.png",
        "setName": "Strixhaven: School of Mages",
        "setLink": "https://gatherer.wizards.com/sets/STX",
        "setCode": "STX",
        "cardCount": 414,
        "releaseDate": "2021-03-25"
    },
    {
        "imageUrl": "sets/C21.png",
        "setName": "Commander 2021",
        "setLink": "https://gatherer.wizards.com/sets/C21",
        "setCode": "C21",
        "cardCount": 410,
        "releaseDate": "2021-03-25"
    },
    {
        "imageUrl": "sets/STA.png",
        "setName": "Strixhaven Mystical Archive",
        "setLink": "https://gatherer.wizards.com/sets/STA",
        "setCode": "STA",
        "cardCount": 63,
        "releaseDate": "2021-03-31"
    },
    {
        "imageUrl": "sets/MH2.png",
        "setName": "Modern Horizons 2",
        "setLink": "https://gatherer.wizards.com/sets/MH2",
        "setCode": "MH2",
        "cardCount": 497,
        "releaseDate": "2021-06-04"
    },
    {
        "imageUrl": "sets/AFC.png",
        "setName": "Adventures in the Forgotten Realms Commander",
        "setLink": "https://gatherer.wizards.com/sets/AFC",
        "setCode": "AFC",
        "cardCount": 332,
        "releaseDate": "2021-06-22"
    },
    {
        "imageUrl": "sets/AFR.png",
        "setName": "Adventures in the Forgotten Realms",
        "setLink": "https://gatherer.wizards.com/sets/AFR",
        "setCode": "AFR",
        "cardCount": 399,
        "releaseDate": "2021-07-12"
    },
    {
        "imageUrl": "sets/J21.png",
        "setName": "Jumpstart: Historic Horizons",
        "setLink": "https://gatherer.wizards.com/sets/J21",
        "setCode": "J21",
        "cardCount": 171,
        "releaseDate": "2021-07-30"
    },
    {
        "imageUrl": "sets/MIC.png",
        "setName": "Innistrad: Midnight Hunt Commander",
        "setLink": "https://gatherer.wizards.com/sets/MIC",
        "setCode": "MIC",
        "cardCount": 187,
        "releaseDate": "2021-08-24"
    },
    {
        "imageUrl": "sets/MID.png",
        "setName": "Innistrad: Midnight Hunt",
        "setLink": "https://gatherer.wizards.com/sets/MID",
        "setCode": "MID",
        "cardCount": 424,
        "releaseDate": "2021-08-24"
    },
    {
        "imageUrl": "sets/VOW.png",
        "setName": "Innistrad: Crimson Vow",
        "setLink": "https://gatherer.wizards.com/sets/VOW",
        "setCode": "VOW",
        "cardCount": 487,
        "releaseDate": "2021-10-12"
    },
    {
        "imageUrl": "sets/VOC.png",
        "setName": "Innistrad: Crimson Vow Commander",
        "setLink": "https://gatherer.wizards.com/sets/VOC",
        "setCode": "VOC",
        "cardCount": 188,
        "releaseDate": "2021-10-12"
    },
    {
        "imageUrl": "sets/HA3.png",
        "setName": "Historic Anthology 3",
        "setLink": "https://gatherer.wizards.com/sets/HA3",
        "setCode": "HA3",
        "cardCount": 27,
        "releaseDate": "2021-10-28"
    },
    {
        "imageUrl": "sets/HA2.png",
        "setName": "Historic Anthology 2",
        "setLink": "https://gatherer.wizards.com/sets/HA2",
        "setCode": "HA2",
        "cardCount": 25,
        "releaseDate": "2021-10-28"
    },
    {
        "imageUrl": "sets/HA5.png",
        "setName": "Historic Anthology 5",
        "setLink": "https://gatherer.wizards.com/sets/HA5",
        "setCode": "HA5",
        "cardCount": 25,
        "releaseDate": "2021-10-28"
    },
    {
        "imageUrl": "sets/HA1.png",
        "setName": "Historic Anthology 1",
        "setLink": "https://gatherer.wizards.com/sets/HA1",
        "setCode": "HA1",
        "cardCount": 20,
        "releaseDate": "2021-10-28"
    },
    {
        "imageUrl": "sets/HA4.png",
        "setName": "Historic Anthology 4",
        "setLink": "https://gatherer.wizards.com/sets/HA4",
        "setCode": "HA4",
        "cardCount": 25,
        "releaseDate": "2021-10-28"
    },
    {
        "imageUrl": "sets/KLR.png",
        "setName": "Kaladesh Remastered",
        "setLink": "https://gatherer.wizards.com/sets/KLR",
        "setCode": "KLR",
        "cardCount": 302,
        "releaseDate": "2021-11-09"
    },
    {
        "imageUrl": "sets/AKR.png",
        "setName": "Amonkhet Remastered",
        "setLink": "https://gatherer.wizards.com/sets/AKR",
        "setCode": "AKR",
        "cardCount": 364,
        "releaseDate": "2021-11-09"
    },
    {
        "imageUrl": "sets/ANB.png",
        "setName": "Arena Base Set",
        "setLink": "https://gatherer.wizards.com/sets/ANB",
        "setCode": "ANB",
        "cardCount": 118,
        "releaseDate": "2021-11-10"
    },
    {
        "imageUrl": "sets/Y22.png",
        "setName": "Innistrad: Midnight Hunt Alchemy",
        "setLink": "https://gatherer.wizards.com/sets/Y22",
        "setCode": "Y22",
        "cardCount": 64,
        "releaseDate": "2022-01-10"
    },
    {
        "imageUrl": "sets/NEC.png",
        "setName": "Kamigawa: Neon Dynasty Commander",
        "setLink": "https://gatherer.wizards.com/sets/NEC",
        "setCode": "NEC",
        "cardCount": 177,
        "releaseDate": "2022-01-22"
    },
    {
        "imageUrl": "sets/NEO.png",
        "setName": "Kamigawa: Neon Dynasty",
        "setLink": "https://gatherer.wizards.com/sets/NEO",
        "setCode": "NEO",
        "cardCount": 537,
        "releaseDate": "2022-02-04"
    },
    {
        "imageUrl": "sets/Y22NEO.png",
        "setName": "Kamigawa: Neon Dynasty Alchemy",
        "setLink": "https://gatherer.wizards.com/sets/Y22NEO",
        "setCode": "Y22NEO",
        "cardCount": 30,
        "releaseDate": "2022-02-23"
    },
    {
        "imageUrl": "sets/https://gatherer-static.wizards.com/set_symbols/UNF/large-common-UNF.png",
        "setName": "Unfinity",
        "setLink": "https://gatherer.wizards.com/sets/UNF",
        "setCode": "UNF",
        "cardCount": 261,
        "releaseDate": "2022-04-01"
    },
    {
        "imageUrl": "sets/NCC.png",
        "setName": "Streets of New Capenna Commander",
        "setLink": "https://gatherer.wizards.com/sets/NCC",
        "setCode": "NCC",
        "cardCount": 450,
        "releaseDate": "2022-04-14"
    },
    {
        "imageUrl": "sets/SNC.png",
        "setName": "Streets of New Capenna",
        "setLink": "https://gatherer.wizards.com/sets/SNC",
        "setCode": "SNC",
        "cardCount": 458,
        "releaseDate": "2022-04-14"
    },
    {
        "imageUrl": "sets/SCH.png",
        "setName": "SNC Store Championship",
        "setLink": "https://gatherer.wizards.com/sets/SCH",
        "setCode": "SCH",
        "cardCount": 3,
        "releaseDate": "2022-05-16"
    },
    {
        "imageUrl": "sets/GDY.png",
        "setName": "SNC Game Day",
        "setLink": "https://gatherer.wizards.com/sets/GDY",
        "setCode": "GDY",
        "cardCount": 3,
        "releaseDate": "2022-05-16"
    },
    {
        "imageUrl": "sets/CLB.png",
        "setName": "Commander Legends: Battle for Baldur's Gate",
        "setLink": "https://gatherer.wizards.com/sets/CLB",
        "setCode": "CLB",
        "cardCount": 891,
        "releaseDate": "2022-05-27"
    },
    {
        "imageUrl": "sets/Y22SNC.png",
        "setName": "Streets of New Capenna Alchemy",
        "setLink": "https://gatherer.wizards.com/sets/Y22SNC",
        "setCode": "Y22SNC",
        "cardCount": 30,
        "releaseDate": "2022-06-06"
    },
    {
        "imageUrl": "sets/2X2.png",
        "setName": "Double Masters 2022",
        "setLink": "https://gatherer.wizards.com/sets/2X2",
        "setCode": "2X2",
        "cardCount": 579,
        "releaseDate": "2022-06-21"
    },
    {
        "imageUrl": "sets/HBG.png",
        "setName": "Alchemy Horizons: Baldur's Gate",
        "setLink": "https://gatherer.wizards.com/sets/HBG",
        "setCode": "HBG",
        "cardCount": 316,
        "releaseDate": "2022-07-06"
    },
    {
        "imageUrl": "sets/DMU.png",
        "setName": "Dominaria United",
        "setLink": "https://gatherer.wizards.com/sets/DMU",
        "setCode": "DMU",
        "cardCount": 434,
        "releaseDate": "2022-08-01"
    },
    {
        "imageUrl": "sets/DMC.png",
        "setName": "Dominaria United Commander",
        "setLink": "https://gatherer.wizards.com/sets/DMC",
        "setCode": "DMC",
        "cardCount": 221,
        "releaseDate": "2022-08-01"
    },
    {
        "imageUrl": "sets/40K.png",
        "setName": "Warhammer 40,000 Commander",
        "setLink": "https://gatherer.wizards.com/sets/40K",
        "setCode": "40K",
        "cardCount": 310,
        "releaseDate": "2022-09-21"
    },
    {
        "imageUrl": "sets/UNA.png",
        "setName": "Unfinity (Acorn)",
        "setLink": "https://gatherer.wizards.com/sets/UNA",
        "setCode": "UNA",
        "cardCount": 126,
        "releaseDate": "2022-09-22"
    },
    {
        "imageUrl": "sets/GN3.png",
        "setName": "Game Night: Free-For-All",
        "setLink": "https://gatherer.wizards.com/sets/GN3",
        "setCode": "GN3",
        "cardCount": 136,
        "releaseDate": "2022-10-04"
    },
    {
        "imageUrl": "sets/BOT.png",
        "setName": "The Brothers' War Transformers Cards",
        "setLink": "https://gatherer.wizards.com/sets/BOT",
        "setCode": "BOT",
        "cardCount": 58,
        "releaseDate": "2022-10-18"
    },
    {
        "imageUrl": "sets/BRC.png",
        "setName": "The Brothers' War Commander",
        "setLink": "https://gatherer.wizards.com/sets/BRC",
        "setCode": "BRC",
        "cardCount": 209,
        "releaseDate": "2022-10-18"
    },
    {
        "imageUrl": "sets/BRC.png",
        "setName": "The Brothers' War Commander",
        "setLink": "https://gatherer.wizards.com/sets/BRC",
        "setCode": "BRC",
        "cardCount": 209,
        "releaseDate": "2022-10-18"
    },
    {
        "imageUrl": "sets/BRO.png",
        "setName": "The Brothers' War",
        "setLink": "https://gatherer.wizards.com/sets/BRO",
        "setCode": "BRO",
        "cardCount": 387,
        "releaseDate": "2022-10-21"
    },
    {
        "imageUrl": "sets/J22.png",
        "setName": "Jumpstart 2022",
        "setLink": "https://gatherer.wizards.com/sets/J22",
        "setCode": "J22",
        "cardCount": 835,
        "releaseDate": "2022-11-04"
    },
    {
        "imageUrl": "sets/DMR.png",
        "setName": "Dominaria Remastered",
        "setLink": "https://gatherer.wizards.com/sets/DMR",
        "setCode": "DMR",
        "cardCount": 467,
        "releaseDate": "2023-01-03"
    },
    {
        "imageUrl": "sets/ONC.png",
        "setName": "Phyrexia: All Will Be One Commander",
        "setLink": "https://gatherer.wizards.com/sets/ONC",
        "setCode": "ONC",
        "cardCount": 172,
        "releaseDate": "2023-01-31"
    },
    {
        "imageUrl": "sets/ONE.png",
        "setName": "Phyrexia: All Will Be One",
        "setLink": "https://gatherer.wizards.com/sets/ONE",
        "setCode": "ONE",
        "cardCount": 390,
        "releaseDate": "2023-01-31"
    },
    {
        "imageUrl": "sets/SIR.png",
        "setName": "Shadows Over Innistrad Remastered",
        "setLink": "https://gatherer.wizards.com/sets/SIR",
        "setCode": "SIR",
        "cardCount": 317,
        "releaseDate": "2023-02-27"
    },
    {
        "imageUrl": "sets/SIS.png",
        "setName": "Shadows of the Past",
        "setLink": "https://gatherer.wizards.com/sets/SIS",
        "setCode": "SIS",
        "cardCount": 83,
        "releaseDate": "2023-03-03"
    },
    {
        "imageUrl": "sets/MOM.png",
        "setName": "March of the Machine",
        "setLink": "https://gatherer.wizards.com/sets/MOM",
        "setCode": "MOM",
        "cardCount": 453,
        "releaseDate": "2023-03-15"
    },
    {
        "imageUrl": "sets/MUL.png",
        "setName": "March of the Machine Multiverse Legends",
        "setLink": "https://gatherer.wizards.com/sets/MUL",
        "setCode": "MUL",
        "cardCount": 65,
        "releaseDate": "2023-03-16"
    },
    {
        "imageUrl": "sets/MOC.png",
        "setName": "March of the Machine Commander",
        "setLink": "https://gatherer.wizards.com/sets/MOC",
        "setCode": "MOC",
        "cardCount": 457,
        "releaseDate": "2023-03-17"
    },
    {
        "imageUrl": "sets/MAT.png",
        "setName": "March of the Machine: The Aftermath",
        "setLink": "https://gatherer.wizards.com/sets/MAT",
        "setCode": "MAT",
        "cardCount": 230,
        "releaseDate": "2023-05-03"
    },
    {
        "imageUrl": "sets/CMM.png",
        "setName": "Commander Masters",
        "setLink": "https://gatherer.wizards.com/sets/CMM",
        "setCode": "CMM",
        "cardCount": 1068,
        "releaseDate": "2023-07-12"
    },
    {
        "imageUrl": "sets/WOE.png",
        "setName": "Wilds of Eldraine",
        "setLink": "https://gatherer.wizards.com/sets/WOE",
        "setCode": "WOE",
        "cardCount": 453,
        "releaseDate": "2023-08-14"
    },
    {
        "imageUrl": "sets/WOT.png",
        "setName": "Wilds of Eldraine Enchanting Tales",
        "setLink": "https://gatherer.wizards.com/sets/WOT",
        "setCode": "WOT",
        "cardCount": 83,
        "releaseDate": "2023-08-14"
    },
    {
        "imageUrl": "sets/WOC.png",
        "setName": "Wilds of Eldraine Commander",
        "setLink": "https://gatherer.wizards.com/sets/WOC",
        "setCode": "WOC",
        "cardCount": 172,
        "releaseDate": "2023-08-14"
    },
    {
        "imageUrl": "sets/WHO.png",
        "setName": "Doctor Who Commander",
        "setLink": "https://gatherer.wizards.com/sets/WHO",
        "setCode": "WHO",
        "cardCount": 604,
        "releaseDate": "2023-09-11"
    },
    {
        "imageUrl": "sets/LTR.png",
        "setName": "The Lord of the Rings: Tales of Middle Earth",
        "setLink": "https://gatherer.wizards.com/sets/LTR",
        "setCode": "LTR",
        "cardCount": 748,
        "releaseDate": "2023-10-19"
    },
    {
        "imageUrl": "sets/LTC.png",
        "setName": "The Lord of the Rings: Tales of Middle Earth Commander",
        "setLink": "https://gatherer.wizards.com/sets/LTC",
        "setCode": "LTC",
        "cardCount": 501,
        "releaseDate": "2023-10-19"
    },
    {
        "imageUrl": "sets/REX.png",
        "setName": "Jurassic World Collection Cards",
        "setLink": "https://gatherer.wizards.com/sets/REX",
        "setCode": "REX",
        "cardCount": 33,
        "releaseDate": "2023-11-01"
    },
    {
        "imageUrl": "sets/LCI.png",
        "setName": "The Lost Caverns of Ixalan",
        "setLink": "https://gatherer.wizards.com/sets/LCI",
        "setCode": "LCI",
        "cardCount": 465,
        "releaseDate": "2023-11-01"
    },
    {
        "imageUrl": "sets/LCC.png",
        "setName": "The Lost Caverns of Ixalan Commander",
        "setLink": "https://gatherer.wizards.com/sets/LCC",
        "setCode": "LCC",
        "cardCount": 379,
        "releaseDate": "2023-11-08"
    },
    {
        "imageUrl": "sets/RVR.png",
        "setName": "Ravnica Remastered",
        "setLink": "https://gatherer.wizards.com/sets/RVR",
        "setCode": "RVR",
        "cardCount": 477,
        "releaseDate": "2023-11-28"
    },
    {
        "imageUrl": "sets/MKC.png",
        "setName": "Murders at Karlov Manor Commander",
        "setLink": "https://gatherer.wizards.com/sets/MKC",
        "setCode": "MKC",
        "cardCount": 357,
        "releaseDate": "2024-01-16"
    },
    {
        "imageUrl": "sets/MKM.png",
        "setName": "Murders at Karlov Manor",
        "setLink": "https://gatherer.wizards.com/sets/MKM",
        "setCode": "MKM",
        "cardCount": 450,
        "releaseDate": "2024-01-29"
    },
    {
        "imageUrl": "sets/CLU.png",
        "setName": "Ravnica Clue Edition",
        "setLink": "https://gatherer.wizards.com/sets/CLU",
        "setCode": "CLU",
        "cardCount": 288,
        "releaseDate": "2024-01-29"
    },
    {
        "imageUrl": "sets/PIP.png",
        "setName": "Magic The Gathering—Fallout",
        "setLink": "https://gatherer.wizards.com/sets/PIP",
        "setCode": "PIP",
        "cardCount": 540,
        "releaseDate": "2024-02-20"
    },
    {
        "imageUrl": "sets/OTP.png",
        "setName": "Outlaws of Thunder Junction Breaking News",
        "setLink": "https://gatherer.wizards.com/sets/OTP",
        "setCode": "OTP",
        "cardCount": 82,
        "releaseDate": "2024-03-18"
    },
    {
        "imageUrl": "sets/OTC.png",
        "setName": "Outlaws of Thunder Junction Commander",
        "setLink": "https://gatherer.wizards.com/sets/OTC",
        "setCode": "OTC",
        "cardCount": 343,
        "releaseDate": "2024-03-18"
    },
    {
        "imageUrl": "sets/BIG.png",
        "setName": "Outlaws of Thunder Junction: The Big Score",
        "setLink": "https://gatherer.wizards.com/sets/BIG",
        "setCode": "BIG",
        "cardCount": 90,
        "releaseDate": "2024-03-18"
    },
    {
        "imageUrl": "sets/OTJ.png",
        "setName": "Outlaws of Thunder Junction",
        "setLink": "https://gatherer.wizards.com/sets/OTJ",
        "setCode": "OTJ",
        "cardCount": 374,
        "releaseDate": "2024-03-22"
    },
    {
        "imageUrl": "sets/MH3.png",
        "setName": "Modern Horizons 3",
        "setLink": "https://gatherer.wizards.com/sets/MH3",
        "setCode": "MH3",
        "cardCount": 522,
        "releaseDate": "2024-05-02"
    },
    {
        "imageUrl": "sets/M3C.png",
        "setName": "Modern Horizons 3 Commander",
        "setLink": "https://gatherer.wizards.com/sets/M3C",
        "setCode": "M3C",
        "cardCount": 396,
        "releaseDate": "2024-05-31"
    },
    {
        "imageUrl": "sets/ACR.png",
        "setName": "Assassin's Creed",
        "setLink": "https://gatherer.wizards.com/sets/ACR",
        "setCode": "ACR",
        "cardCount": 302,
        "releaseDate": "2024-06-12"
    },
    {
        "imageUrl": "sets/BLB.png",
        "setName": "Bloomburrow",
        "setLink": "https://gatherer.wizards.com/sets/BLB",
        "setCode": "BLB",
        "cardCount": 397,
        "releaseDate": "2024-07-17"
    },
    {
        "imageUrl": "sets/BLC.png",
        "setName": "Bloomburrow Commander",
        "setLink": "https://gatherer.wizards.com/sets/BLC",
        "setCode": "BLC",
        "cardCount": 360,
        "releaseDate": "2024-07-17"
    },
    {
        "imageUrl": "sets/DSK.png",
        "setName": "Duskmourn: House of Horror",
        "setLink": "https://gatherer.wizards.com/sets/DSK",
        "setCode": "DSK",
        "cardCount": 451,
        "releaseDate": "2024-08-15"
    },
    {
        "imageUrl": "sets/DSC.png",
        "setName": "Duskmourn: House of Horror Commander",
        "setLink": "https://gatherer.wizards.com/sets/DSC",
        "setCode": "DSC",
        "cardCount": 379,
        "releaseDate": "2024-08-15"
    },
    {
        "imageUrl": "sets/MB2.png",
        "setName": "Mystery Booster 2: Convention Edition",
        "setLink": "https://gatherer.wizards.com/sets/MB2",
        "setCode": "MB2",
        "cardCount": 382,
        "releaseDate": "2024-10-07"
    },
    {
        "imageUrl": "sets/EB2.png",
        "setName": "Mystery Booster 2: Convention Edition Eternal",
        "setLink": "https://gatherer.wizards.com/sets/EB2",
        "setCode": "EB2",
        "cardCount": 3,
        "releaseDate": "2024-10-07"
    },
    {
        "imageUrl": "sets/FDN.png",
        "setName": "Magic: The Gathering Foundations",
        "setLink": "https://gatherer.wizards.com/sets/FDN",
        "setCode": "FDN",
        "cardCount": 730,
        "releaseDate": "2024-10-14"
    },
    {
        "imageUrl": "sets/FDC.png",
        "setName": "Magic: The Gathering Foundations Commander",
        "setLink": "https://gatherer.wizards.com/sets/FDC",
        "setCode": "FDC",
        "cardCount": 3,
        "releaseDate": "2024-10-14"
    },
    {
        "imageUrl": "sets/J25.png",
        "setName": "Jumpstart 2025",
        "setLink": "https://gatherer.wizards.com/sets/J25",
        "setCode": "J25",
        "cardCount": 779,
        "releaseDate": "2024-12-04"
    },
    {
        "imageUrl": "sets/INR.png",
        "setName": "Innistrad Remastered",
        "setLink": "https://gatherer.wizards.com/sets/INR",
        "setCode": "INR",
        "cardCount": 567,
        "releaseDate": "2025-01-24"
    },
    {
        "imageUrl": "sets/DFT.png",
        "setName": "Aetherdrift",
        "setLink": "https://gatherer.wizards.com/sets/DFT",
        "setCode": "DFT",
        "cardCount": 543,
        "releaseDate": "2025-02-14"
    },
    {
        "imageUrl": "sets/DRC.png",
        "setName": "Aetherdrift Commander",
        "setLink": "https://gatherer.wizards.com/sets/DRC",
        "setCode": "DRC",
        "cardCount": 187,
        "releaseDate": "2025-02-14"
    },
    {
        "imageUrl": "sets/TDC.png",
        "setName": "Tarkir: Dragonstorm Commander",
        "setLink": "https://gatherer.wizards.com/sets/TDC",
        "setCode": "TDC",
        "cardCount": 411,
        "releaseDate": "2025-04-11"
    },
    {
        "imageUrl": "sets/TDM.png",
        "setName": "Tarkir: Dragonstorm",
        "setLink": "https://gatherer.wizards.com/sets/TDM",
        "setCode": "TDM",
        "cardCount": 451,
        "releaseDate": "2025-04-11"
    },
    {
        "imageUrl": "sets/FCA.png",
        "setName": "FINAL FANTASY Through the Ages",
        "setLink": "https://gatherer.wizards.com/sets/FCA",
        "setCode": "FCA",
        "cardCount": 64,
        "releaseDate": "2025-06-13"
    },
    {
        "imageUrl": "sets/FIN.png",
        "setName": "Magic: The Gathering—FINAL FANTASY",
        "setLink": "https://gatherer.wizards.com/sets/FIN",
        "setCode": "FIN",
        "cardCount": 681,
        "releaseDate": "2025-06-13"
    },
    {
        "imageUrl": "sets/FIC.png",
        "setName": "Magic: The Gathering—FINAL FANTASY Commander",
        "setLink": "https://gatherer.wizards.com/sets/FIC",
        "setCode": "FIC",
        "cardCount": 490,
        "releaseDate": "2025-06-13"
    },
    {
        "imageUrl": "sets/large-common-EOC.png",
        "setName": "Edge of Eternities Commander",
        "setLink": "https://gatherer.wizards.com/sets/EOC",
        "setCode": "EOC",
        "cardCount": 191,
        "releaseDate": "2025-08-01"
    },
    {
        "imageUrl": "sets/EOS.png",
        "setName": "Edge of Eternities Bonus Sheet",
        "setLink": "https://gatherer.wizards.com/sets/EOS",
        "setCode": "EOS",
        "cardCount": 90,
        "releaseDate": "2025-08-01"
    },
    {
        "imageUrl": "sets/large-common-EOE.png",
        "setName": "Edge of Eternities",
        "setLink": "https://gatherer.wizards.com/sets/EOE",
        "setCode": "EOE",
        "cardCount": 374,
        "releaseDate": "2025-08-01"
    },
    {
        "imageUrl": "sets/large-common-OM1.png",
        "setName": "Through the Omenpaths",
        "setLink": "https://gatherer.wizards.com/sets/OM1",
        "setCode": "OM1",
        "cardCount": 193,
        "releaseDate": "2025-09-23"
    },
    {
        "imageUrl": "sets/large-common-OMB.png",
        "setName": "Omenpaths Bonus Sheet",
        "setLink": "https://gatherer.wizards.com/sets/OMB",
        "setCode": "OMB",
        "cardCount": 40,
        "releaseDate": "2025-09-23"
    },
    {
        "imageUrl": "sets/large-common-SPE.png",
        "setName": "Magic: The Gathering | Marvel's Spider-Man",
        "setLink": "https://gatherer.wizards.com/sets/SPE",
        "setCode": "SPE",
        "cardCount": 26,
        "releaseDate": "2025-09-26"
    },
    {
        "imageUrl": "sets/large-common-SPM.png",
        "setName": "Magic: The Gathering | Marvel's Spider-Man",
        "setLink": "https://gatherer.wizards.com/sets/SPM",
        "setCode": "SPM",
        "cardCount": 300,
        "releaseDate": "2025-09-26"
    },
    {
        "imageUrl": "sets/MAR.png",
        "setName": "Source Material Cards",
        "setLink": "https://gatherer.wizards.com/sets/MAR",
        "setCode": "MAR",
        "cardCount": 40,
        "releaseDate": "2025-09-26"
    },
    {
        "imageUrl": "sets/large-common-TLE.png",
        "setName": "Magic: The Gathering | Avatar: The Last Airbender Extra",
        "setLink": "https://gatherer.wizards.com/sets/TLE",
        "setCode": "TLE",
        "cardCount": 277,
        "releaseDate": "2025-11-21"
    },
    {
        "imageUrl": "sets/large-common-TLA.png",
        "setName": "Magic: The Gathering | Avatar: The Last Airbender",
        "setLink": "https://gatherer.wizards.com/sets/TLA",
        "setCode": "TLA",
        "cardCount": 414,
        "releaseDate": "2025-11-21"
    },
    {
        "imageUrl": "sets/SPG.png",
        "setName": "Special Guests",
        "setLink": "https://gatherer.wizards.com/sets/SPG",
        "setCode": "SPG",
        "cardCount": 144,
        "releaseDate": "2026-01-23"
    },
    {
        "imageUrl": "sets/large-common-ECC.png",
        "setName": "Lorwyn Eclipsed Commander",
        "setLink": "https://gatherer.wizards.com/sets/ECC",
        "setCode": "ECC",
        "cardCount": 170,
        "releaseDate": "2026-01-23"
    },
    {
        "imageUrl": "sets/large-common-ECL.png",
        "setName": "Lorwyn Eclipsed",
        "setLink": "https://gatherer.wizards.com/sets/ECL",
        "setCode": "ECL",
        "cardCount": 417,
        "releaseDate": "2026-01-23"
    },
    {
        "imageUrl": "sets/large-common-TMC.png",
        "setName": "Magic: The Gathering | Teenage Mutant Ninja Turtles Commander",
        "setLink": "https://gatherer.wizards.com/sets/TMC",
        "setCode": "TMC",
        "cardCount": 132,
        "releaseDate": "2026-02-24"
    },
    {
        "imageUrl": "sets/large-common-PZA.png",
        "setName": "Borderless Source Material Cards",
        "setLink": "https://gatherer.wizards.com/sets/PZA",
        "setCode": "PZA",
        "cardCount": 20,
        "releaseDate": "2026-02-24"
    },
    {
        "imageUrl": "sets/large-common-TMT.png",
        "setName": "Magic: The Gathering | Teenage Mutant Ninja Turtles",
        "setLink": "https://gatherer.wizards.com/sets/TMT",
        "setCode": "TMT",
        "cardCount": 300,
        "releaseDate": "2026-02-24"
    },
    {
        "imageUrl": "sets/large-common-PRM.png",
        "setName": "Promo Cards",
        "setLink": "https://gatherer.wizards.com/sets/PRM",
        "setCode": "PRM",
        "cardCount": 15,
        "releaseDate": "2026-02-24"
    }
]

}