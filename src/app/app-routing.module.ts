import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimaryStudentListComponent } from './primary/primary-student-list/primary-student-list.component';
import { SecondaryStudentListComponent } from './secondary/secondary-student-list/secondary-student-list.component';
import { PrimaryComponent } from './primary/primary.component';

const routes: Routes = [
  {path:'primary',component:PrimaryStudentListComponent},
   {path:'secondary',component:SecondaryStudentListComponent},
   {path: 'home',  redirectTo: '/',
 pathMatch: 'full'},
 {path: 'courses',  redirectTo: '/',
 pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
