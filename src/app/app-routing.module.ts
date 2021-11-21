import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { UserInstanceComponent } from './user-instance/user-instance.component';
import { HostInstanceComponent } from './host-instance/host-instance.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app-root',       component: AppComponent },
  { path: 'character-card', component: CharacterCardComponent },
  { path: 'user-instance/:instanceId',  component: UserInstanceComponent},
  { path: 'host-instance/:instanceId', component: HostInstanceComponent },
  { path: 'home',           component: HomeComponent},
  { path: 'redirect', redirectTo: 'home', pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
