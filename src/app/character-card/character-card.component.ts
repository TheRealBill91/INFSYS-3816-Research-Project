import { Component, Input, OnInit } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'; // IMPORT FOR TESTING

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

    constructor(private _snackBar: MatSnackBar) { } // INJECTION FOR TESTING

    ngOnInit(): void {
    }

    testSnackBar() { // FUNCTION FOR TESTING
      this._snackBar.open("BUTTON CLICKED", "CLOSE", {duration: 3000, horizontalPosition: 'end'});
    }

}
