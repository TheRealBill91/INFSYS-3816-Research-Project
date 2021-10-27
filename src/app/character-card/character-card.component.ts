import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

    @Input("banner") characterImage?: string; 
    @Input("icon") characterIcon?: string;
    @Input("name") characterName?: string;
    @Input("title") characterTitle?: string;

    constructor() { }

    ngOnInit(): void {
    }

}
