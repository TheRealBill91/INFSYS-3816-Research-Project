import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { HomeComponent } from './home/home.component';
import { UserInstanceComponent } from './user-instance/user-instance.component';
import { HostDialogComponent } from './home/host-dialog/host-dialog.component';
import { UserDialogComponent } from './home/user-dialog/user-dialog.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogClose } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { A11yModule } from '@angular/cdk/a11y';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HostInstanceComponent } from './host-instance/host-instance.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    HomeComponent,
    HostInstanceComponent,
    UserInstanceComponent,
    HostDialogComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    // MatDialogClose,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    A11yModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
