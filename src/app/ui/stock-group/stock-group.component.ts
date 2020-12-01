import { Component, OnInit, Optional, Inject } from '@angular/core';
import { StockGroup } from 'src/app/domain/stockgroup';
import { StockGroupService } from 'src/app/services/stock-group.service';
import { MAT_DIALOG_DATA, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-stock-group',
  templateUrl: './stock-group.component.html',
  styleUrls: ['./stock-group.component.css']
})
export class StockGroupComponent implements OnInit {

  action: string;
  stockGroups: StockGroup[];
  stockGroup: StockGroup;

  constructor(
    public dialogRef: MatDialogRef<StockGroupComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any, private stockGroupService: StockGroupService) {
    console.log(data);
    this.stockGroup = data.stockGroup;
    this.action = data.action;
    console.log('data is :: ' + this.stockGroup.name);
    console.log('action type is :: ' + this.action);
  }

  ngOnInit() {
    this.loadAllStockGroups();
  }

  loadAllStockGroups() {
      this.stockGroupService.getAll().then(stockGroups => {
        this.stockGroups = stockGroups as StockGroup[];
    });
    return this.stockGroups;
 }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.stockGroup});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }
}

