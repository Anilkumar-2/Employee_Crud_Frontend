import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegesterComponent } from './regester/regester.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RegesterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    LogoutComponent,
    AddempComponent,
    ViewComponent,
    UpdateComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000,
        // progressBar: true,
        // progressAnimation: 'decreasing',
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }
    ),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
