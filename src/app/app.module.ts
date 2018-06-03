import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';
import { App } from './app.component';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD17i3GjIo1-UoZlkTKkrK4xRuy5Tc6Ny4",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [ App ],
  bootstrap: [App]
})
export class AppModule { }
