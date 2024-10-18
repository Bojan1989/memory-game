// **Vendros:**
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


// Main routes.
const routes: Routes = [
    {
      path: '',
      component: LoginComponent,
      children: [{ path: 'login', component: LoginComponent }],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }