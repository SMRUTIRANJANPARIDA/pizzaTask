import { Component, OnInit } from '@angular/core';
import {order} from '../data/pizzaTask';

@Component({
  selector: 'app-served',
  templateUrl: './served.component.html',
  styleUrls: ['./served.component.scss']
})
export class ServedComponent implements OnInit {
  order: { orderNo: number; CustName: string; itemName: string; Price: number; status: string; }[];
  served:any = [];
   constructor() { }
 
   ngOnInit(): void {
     this.prepairedOrder();
   }
   
  prepairedOrder() {
    this.order = order
    console.log(this.order)
    for(var i=0;i<this.order.length;i++){
      if(this.order[i].status == 'served'){
      this.served.push(this.order[i])
      }
    }
}
}
