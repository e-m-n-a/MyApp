import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { RestComponent } from './rest/rest.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AuthGuard } from './auth.guard';
import { TaskComponent } from './task/task.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);



const appRoutes: Routes = [
  { path: 'uppercase', component: UppercaseComponent },
  { path: 'rest', component: RestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'toDoList', component: ToDoListComponent, canActivate: [AuthGuard] },
  { path: 'toDoList/:task', component: TaskComponent, canActivate: [AuthGuard] },
  { path: 'currencies', component: CurrenciesComponent },
  { path: '', component: HomeComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UppercaseComponent,
    RestComponent,
    RegisterComponent,
    LoginComponent,
    ToDoListComponent,
    TaskComponent,
    CurrenciesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
