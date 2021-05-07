import { Component, OnInit } from '@angular/core';
import {order} from '../data/pizzaTask';

@Component({
  selector: 'app-prepairing',
  templateUrl: './prepairing.component.html',
  styleUrls: ['./prepairing.component.scss']
})
export class PrepairingComponent implements OnInit {
  order: { orderNo: number; CustName: string; itemName: string; Price: number; status: string; }[];
 prepairing:any = [];
  check: any;
  constructor() { }

  ngOnInit(): void {
    this.prepairedOrder();
  }
  
 prepairedOrder() {
   this.order = order
   console.log(this.order)
   for(var i=0;i<this.order.length;i++){
     if(this.order[i].status == 'prepairing'){
     this.prepairing.push(this.order[i])
     }
   }
  }
changeOrder(e) {
  this.check = e
  for(let i=0 ; i<this.order.length;i++){
    if(this.order[i].status == e.status){
    this.order[i].status = 'served'
    }
  }
}
  

}
