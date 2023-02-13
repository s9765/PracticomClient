import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretionsComponent } from './diretions/diretions.component';
import { EndComponent } from './end/end.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path: "", redirectTo: "register" , pathMatch: "full" },
{path: "register", component:RegisterComponent,pathMatch: "full"},
{path: "directions", component:DiretionsComponent,pathMatch: "full"},
{path: "end", component:EndComponent,pathMatch: "full"},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
