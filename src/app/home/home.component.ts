import { Component, OnInit } from '@angular/core';
import {order} from '../data/pizzaTask';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  order: { orderNo: number; CustName: string; itemName: string; Price: number; status: string; }[];
  totalOrder:any;
  totalServed:any=0;
  totalPrepairing:any=0;

  constructor() { }

  ngOnInit(): void {
    this.order =order
    this.totalCount();
  }
  totalCount(){
    this.totalOrder = this. order.length;
    for(var i=0;i<this.order.length;i++){
      if(this.order[i].status == 'served'){
        this.totalServed ++ 
      }else if(this.order[i].status == 'prepairing'){
        this.totalPrepairing ++
      }
    }
  }

  
  
  

}
