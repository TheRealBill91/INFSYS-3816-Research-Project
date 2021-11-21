import { Component, HostListener, OnInit, AfterContentInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-instance',
  templateUrl: './user-instance.component.html',
  styleUrls: ['./user-instance.component.css']
})
export class UserInstanceComponent implements OnInit, AfterContentInit {

    data: Observable<any>;
    dataRef: AngularFireObject<any>;
    title = 'research-project';

    instance: Observable<any>;
    instanceRef: AngularFireObject<any>;
    instanceSubscriptionTest: any;
    instanceSubscription?: Subscription;

    routeInfoTest: string = 'DEFAULT';

    testInstanceKeysRef: AngularFireList<any>;
    testInstanceKeys: Observable<any>;
    testKeysList: string[] = ['DEFAULT'];

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

    constructor(db: AngularFireDatabase, private route: ActivatedRoute, private router: Router) {
        this.dataRef = db.object('data');
        this.data = this.dataRef.valueChanges();
        this.instanceRef = db.object(`instances/${this.routeInfoTest}`);        
        this.instance = this.instanceRef.valueChanges();
        this.route.paramMap.subscribe(params => {
            let routeCheck = params.get('instanceId');
            if (routeCheck) {
                this.routeInfoTest = routeCheck;
                this.instanceRef = db.object(`instances/${this.routeInfoTest}`);        
                this.instance = this.instanceRef.valueChanges();
            }
        });

        // this.addUser();

        this.testInstanceKeysRef = db.list('instances');
        this.testInstanceKeys = this.testInstanceKeysRef.snapshotChanges();
    }

    ngOnInit() {
        this.instanceSubscription = this.instance.subscribe(() => {
            this.instanceRef.query.get().then(obj => {
                this.instanceSubscriptionTest = obj.val() === null;
            });
        });
        // this.addUser();

        this.route.paramMap.subscribe(params => {
            let routeCheck = params.get('instanceId');
            if (routeCheck) {
                this.routeInfoTest = routeCheck;
            }
        });
    }

    ngAfterContentInit(): void {
        this.addUser();
    }

    ngOnDestroy() {
        if (this.instanceSubscription) this.instanceSubscription.unsubscribe();
        this.removeUser();
    }

    addUser(): void {
        let currentCount: number;
        this.instanceRef.query.get().then(obj => {
            currentCount = obj.val().users;
        }).then(() => {
            this.instanceRef.update({
                users: currentCount + 1
            });
        });
    }

    removeUser(): void {
        let currentCount: number;
        this.instanceRef.query.get().then(obj => {
            currentCount = obj.val().users;
        }).then(() => {
            this.instanceRef.update({
                users: currentCount - 1
            });
        });
    }

    goHome(): void {
        this.router.navigate(['home']);
    }

    @HostListener('window:beforeunload', ['$event'])
    beforeUnloadHandler(event: Event): void {
        this.ngOnDestroy();
    }

    @HostListener('window:popstate', ['$event'])
    beforeBackHandler(event: Event): void {
        // this.ngOnDestroy();
    }

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
