import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChildComponent } from './child/child.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'dashboard', component: NavigationComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
