import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: ConnectionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', component: PageNotFoundComponent }

];



@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes,{ enableTracing: true }) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
