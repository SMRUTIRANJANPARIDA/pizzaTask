import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from '../app/order/order.component'
import {HomeComponent} from '../app/home/home.component'
import { PrepairingComponent } from './prepairing/prepairing.component';
import { ServedComponent } from './served/served.component';
const routes: Routes = [
  {path:'order', component:OrderComponent},
  {path:"",component:HomeComponent},
  {path:'prepairing',component:PrepairingComponent},
  {path:'served',component:ServedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
