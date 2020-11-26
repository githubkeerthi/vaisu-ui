import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})/*   This class helps to call one component method from another component */
export class EventEmitterService {
  stockGroupsComponentFunction = new EventEmitter();    
  subsVar: Subscription; 
  constructor() { }

   callStockGroupComponentFunction() {    
    this.stockGroupsComponentFunction.emit(); 
  }  
}
