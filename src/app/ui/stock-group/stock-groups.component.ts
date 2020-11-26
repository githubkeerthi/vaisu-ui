import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { StockGroupService } from 'src/app/services/stock-group.service';
import { StockGroup } from 'src/app/domain/stockgroup';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StockGroupComponent } from './stock-group.component';

@Component({
  selector: 'app-stock-groups',
  templateUrl: './stock-groups.component.html',
  styleUrls: ['./stock-groups.component.scss', './stock-groups.component.css'],
  providers: []
})
export class StockGroupsComponent implements OnInit, AfterViewInit {
  stockGroup: StockGroup;
  displayedColumns: string[] = ['position', 'name', 'alias', 'parentgroup', 'action'];
  datasource = new MatTableDataSource<StockGroup>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

@ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.datasource) {
      this.datasource.sort = value;
    }
  }


  constructor(private stockGroupService: StockGroupService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadAllStockGroups();
  }

openDialog(obj) {
    const dialogRef = this.dialog.open(StockGroupComponent, {
      width: '650px',
      data: obj,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Action type is after dialog closed :: ' + result.event);
      this.stockGroup = result.data as StockGroup;
      if (result.event === 'Add') {
       this.stockGroupService.create(this.stockGroup);
      } else if (result.event === 'Update') {
       this.stockGroupService.update(this.stockGroup);
      } else if (result.event === 'Delete') {
       this.stockGroupService.delete(this.stockGroup.id);
      }
       this.loadAllStockGroups();
    });
  }

  loadAllStockGroups() {
      this.stockGroupService.getAll().then(data => {
        this.datasource.data = data as StockGroup[];
    });
    return this.datasource;
 }

 public doFilter = (value: string) => {
    this.datasource.filter = value.trim().toLocaleLowerCase();
  }
}
