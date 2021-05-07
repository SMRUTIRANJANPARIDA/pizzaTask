import { Component, OnInit } from '@angular/core';
import {order} from '../data/pizzaTask';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: { orderNo: number; CustName: string; itemName: string; Price: number; status: string; }[];
  check: any;
 

  constructor() { }     

  ngOnInit(): void {
    this.order=order
    console.log(this.order)
    
  }
  changeOrder(e) {
    this.check = e
    for(let i=0 ; i<this.order.length;i++){
      if(this.order[i].status == e.status){
      this.order[i].status = 'prepairing'
      }
    }
}


}
