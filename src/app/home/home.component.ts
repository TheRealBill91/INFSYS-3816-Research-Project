import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HostDialogComponent } from './host-dialog/host-dialog.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    instances: Observable<any>;
    instancesRef: AngularFireObject<any>;
    test: any;

    constructor(db: AngularFireDatabase, private router: Router, public dialog: MatDialog) {
        this.instancesRef = db.object('instances');        
        this.instances = this.instancesRef.valueChanges();
        this.instancesRef.query.get().then(obj => {
            let json: Object | null = obj.toJSON();
            if (json) {
                this.test = Object.keys(json);
                this.test = json;
            }
        })
    }

    ngOnInit(): void {
    }

    addInstance(instanceId: string): void {
        let databaseObject: Record<string, any>;
        let keys: string[];
        this.instancesRef.query.get().then(obj => {
            let json: Object | null = obj.toJSON();
            if (json) {
                databaseObject = json;
                keys = Object.keys(json);
                this.test = Object.keys(json);
                this.test = databaseObject;
            }
        }).then(() => {
            if (!keys.includes(instanceId)) {
                databaseObject[instanceId] = {users: 0};
                this.instancesRef.update(databaseObject);
            }
        });
    }

    openHostDialog(): void {
        const dialogRef = this.dialog.open(HostDialogComponent, {
            width: '250px'
        });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate([`/host-instance/${result}`]);
                this.addInstance(result);
            }
        });
    }

    openUserDialog(): void {
        const dialogRef = this.dialog.open(UserDialogComponent, {
            width: '250px'
        });
      
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate([`/user-instance/${result}`]);
                this.addInstance(result);
            }
        });
    }

    navigationTest(): void {
        this.router.navigate([`/user-instance/135246`, { receivedIdTest: 135246}]);
    }

}