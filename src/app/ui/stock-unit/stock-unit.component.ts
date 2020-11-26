import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-unit',
  templateUrl: './stock-unit.component.html',
  styleUrls: ['./stock-unit.component.css']
})
export class StockUnitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
