import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent
    
  },
  {
    path :'admin',
    loadChildren: () => import('./admin/admin.module').then (m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
