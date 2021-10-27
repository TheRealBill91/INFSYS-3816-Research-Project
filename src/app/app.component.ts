import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'research-project';

    characters: Character[] = [
        new Character('bloodhound', 'Recon',     'Technological Tracker'),
        new Character('gibraltar',  'Defensive', 'Shielded Fortress'),
        new Character('lifeline',   'Support',   'Combat Medic'),
        new Character('pathfinder', 'Recon',     'Forward Scout'),
        new Character('wraith',     'Offensive', 'Interdimensional Skirmisher'),
        new Character('bangalore',  'Offensive', 'Professional Soldier'),
        new Character('caustic',    'Defensive', 'Toxic Trapper'),
        new Character('mirage',     'Offensive', 'Holographic Trickster'),
        new Character('octane',     'Offensive', 'High-Speed Daredevil'),
        new Character('wattson',    'Defensive', 'Static Defender'),
        new Character('crypto',     'Recon',     'Surveillance Expert'),
        new Character('revenant',   'Offensive', 'Synthetic Nightmare'),
        new Character('loba',       'Support',   'Translocating Thief'),
        new Character('rampart',    'Defensive', 'Amped Modder'),
        new Character('horizon',    'Offensive', 'Gravitational Manipulator'),
        new Character('fuse',       'Offensive', 'Bombastic Explosives Expert'),
        new Character('valkyrie',   'Recon',     'Winged Avenger'),
        new Character('seer',       'Recon',     'Ambush Artist')
    ];

}

class Character {

    name: string;
    banner: string;
    icon: string;
    title: string;

    constructor(name: string, type: string, title: string) {
        this.name = name;
        this.banner = `../../assets/Images/Banners/${name}.png`;
        this.icon = `../../assets/Images/Icons/${type}.png`;
        this.title = title;
    }

}