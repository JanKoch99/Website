import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { RouterComponent } from './router/router.component';
import { ModuleWRoutesComponent } from './module-w-routes/module-w-routes.component';


@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
    RouterComponent,
    ModuleWRoutesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
