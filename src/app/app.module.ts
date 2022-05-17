import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from 'auth.interceptor';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DialogComponent } from './dialog/dialog.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PChildDailogComponent } from './p-child-dailog/p-child-dailog.component';
import { PUserDailogComponent } from './p-user-dailog/p-user-dailog.component';
import { ViewChildDailogComponent } from './view-child-dailog/view-child-dailog.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { AddChildComponent } from './add-child/add-child.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { ViewtransactionComponent } from './viewtransaction/viewtransaction.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetPasswordDailogComponent } from './forget-password-dailog/forget-password-dailog.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { FooterComponent } from './footer/footer.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { NgToastModule } from 'ng-angular-popup';
import { DashboardfooterComponent } from './dashboardfooter/dashboardfooter.component';






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
    PUserDailogComponent,
    PChildDailogComponent,
    ViewChildDailogComponent,
    ViewTransactionComponent,
    ChildDetailsComponent,
    AddChildComponent,
    ViewtransactionComponent,
    ParentDetailsComponent,
    ForgetPasswordComponent,
    ForgetPasswordDailogComponent,
    ResetpasswordComponent,
    FooterComponent,
    DashboardfooterComponent,


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
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    NgToastModule



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
