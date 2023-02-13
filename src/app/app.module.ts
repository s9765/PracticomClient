import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DiretionsComponent } from './diretions/diretions.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EndComponent } from './end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DiretionsComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
