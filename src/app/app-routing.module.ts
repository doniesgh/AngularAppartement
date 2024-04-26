import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch:'full'} ,
  { path: 'home', component: HomeComponent } ,
  { path: 'add', component: FormResidenceComponent } ,
  { path: 'appartement/:id', component: ResidenceDetailsComponent } ,
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
