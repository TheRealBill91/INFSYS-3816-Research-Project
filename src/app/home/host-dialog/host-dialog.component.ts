import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'host-dialog',
    templateUrl: './host-dialog.component.html',
    styleUrls: ['./host-dialog.component.css']
})
export class HostDialogComponent {

    instanceId: string;
    
    constructor(public dialogRef: MatDialogRef<HostDialogComponent>) {
        this.instanceId = String(Math.random()).substring(2, 7);
    }
  
    onNoClick(): void {
        this.dialogRef.close();
    }
    
}
