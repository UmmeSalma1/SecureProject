import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddChildComponent } from './add-child/add-child.component';
import { ChildComponent } from './child/child.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgetPasswordDailogComponent } from './forget-password-dailog/forget-password-dailog.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParentComponent } from './parent/parent.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'dashboard', component: NavigationComponent ,canActivate:[AuthGuardGuard]},
  { path: 'parent', component: ParentComponent,canActivate:[AuthGuardGuard] },
  { path: 'child', component: ChildComponent,canActivate:[AuthGuardGuard] },
  { path: 'forgetPassword', component: ForgetPasswordComponent},
  { path: 'forgetpopup', component: ForgetPasswordDailogComponent},
  { path: 'resetpassword', component: ResetpasswordComponent},
  { path: 'demo', component: AddChildComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
