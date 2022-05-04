import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { RequestsComponent } from './requests/requests.component' 
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule, } from '@angular/material/form-field';
import { ViewComponent } from './view/view.component';
import { ParentDialogComponent } from './parent-dialog/parent-dialog.component';
import { ChildDialogComponent } from './child-dialog/child-dialog.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { TransactionDialogComponent } from './transaction-dialog/transaction-dialog.component';
import { VendorsDialogComponent } from './vendors-dialog/vendors-dialog.component';
import { RefundsDialogComponent } from './refunds-dialog/refunds-dialog.component';
import { ChildRequestComponent } from './child-request/child-request.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProfileComponent, AboutComponent, HelpComponent, NotFoundComponent, DashboardComponent, RequestsComponent, ViewComponent, ParentDialogComponent, ChildDialogComponent, CardDialogComponent, TransactionDialogComponent, VendorsDialogComponent, RefundsDialogComponent, ChildRequestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
