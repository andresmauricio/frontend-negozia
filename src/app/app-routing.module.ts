import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';


const routes: Routes = [
  { path: '', component: ViewUserComponent },
  { path: 'crear', component: CreateUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
