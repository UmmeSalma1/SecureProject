import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContactusComponent } from './contactus/contactus.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PUserDailogComponent } from './p-user-dailog/p-user-dailog.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SignupComponent,
    SigninComponent,
    DialogComponent,
    DialogSignupComponent,
    HomeComponent,
    AboutusComponent,
    MyDashboardComponent,
    NavigationComponent,
    ContactusComponent,
    SideNavComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    PUserDailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
