import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'user-dialog',
    templateUrl: './user-dialog.component.html',
    styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent {

    instanceId: string = 'pizza';

    constructor(public dialogRef: MatDialogRef<UserDialogComponent>) { }
  
    onNoClick(): void {
        this.dialogRef.close();
    }

}
