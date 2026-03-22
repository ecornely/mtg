import { Component } from '@angular/core';
import { Keyword } from './keywork.model';
import { Phases } from "./phases/phases";

@Component({
  selector: 'app-cheat',
  imports: [Phases],
  templateUrl: './cheat.html',
  styleUrl: './cheat.css',
})
export class Cheat {

public keywords: Keyword[] = [
  { 
    title: "Célérité", 
    en: "Haste", 
    description: "Cette créature peut attaquer et s'engager dès le tour où elle arrive sur le champ de bataille." 
  },
  { 
    title: "Flash", 
    en: "Flash", 
    description: "Permet de lancer une carte (créature, artefact, etc.) n'importe quand comme un éphémère." 
  },
  { 
    title: "Contact mortel", 
    en: "Deathtouch", 
    description: "N'importe quelle quantité de dégâts infligée à une créature est suffisante pour la détruire." 
  },
  { 
    title: "Double initiative", 
    en: "Double Strike", 
    description: "Inflige des dégâts deux fois (une fois lors de l'étape d'initiative, une fois lors de l'étape normale)." 
  },
  { 
    title: "Indestructible", 
    en: "Indestructible", 
    description: "Les effets qui disent 'détruisez' et les dégâts de combat ou de sorts ne détruisent pas cette créature." 
  },
  { 
      title: "Infect", 
      en: "Infect", 
      description: "Cette source inflige des blessures aux créatures sous forme de marqueurs -1/-1 et aux joueurs sous forme de marqueurs poison." 
  },
  { 
    title: "Initiative", 
    en: "First Strike", 
    description: "Inflige ses dégâts de combat avant les créatures sans l'initiative." 
  },
  { 
    title: "Lien de vie", 
    en: "Lifelink", 
    description: "Les dégâts infligés par cette créature vous font gagner autant de points de vie." 
  },
  { 
    title: "Linceul", 
    en: "Shroud", 
    description: "Cette créature ne peut pas être la cible de sorts ou de capacités (même les vôtres)." 
  },
  { 
    title: "Parade", 
    en: "Ward", 
    description: "Si l'adversaire cible cette carte, son sort est annulé à moins qu'il ne paie le coût supplémentaire." 
  },
  { 
    title: "Piétinement", 
    en: "Trample", 
    description: "Inflige les dégâts excédentaires au contrôleur de la créature bloqueuse." 
  },
  { 
    title: "Portée", 
    en: "Reach", 
    description: "Cette créature peut bloquer les créatures avec le Vol." 
  },
  { 
    title: "Vigilance", 
    en: "Vigilance", 
    description: "Attaquer avec cette créature ne la fait pas s'engager." 
  },
  { 
    title: "Vol", 
    en: "Flying", 
    description: "Ne peut être bloqué que par des créatures avec le Vol ou la Portée." 
  },
  { 
    title: "Menace", 
    en: "Menace", 
    description: "Ne peut être bloquée que par deux créatures ou plus" 
  }
].sort((a, b) => a.title.localeCompare(b.title));

}
