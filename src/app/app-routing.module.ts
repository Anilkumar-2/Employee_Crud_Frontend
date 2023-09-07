import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { AppComponent } from './app.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegesterComponent } from './regester/regester.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'regester', component: RegesterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent, canActivate: [EmployeeserviceService] },
  { path: 'logout', component: LogoutComponent },
  { path: 'app', component: AppComponent },
  { path: 'addemployee', component: AddempComponent },
  { path: 'view', component: ViewComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegesterComponent, LoginComponent, HeaderComponent, HomeComponent, AddempComponent, LogoutComponent, ViewComponent, UpdateComponent]
