import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './ui/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { RouteGaurdService } from './services/route-gaurd.service';
import { StockGroupComponent } from './ui/stock-group/stock-group.component';
import { StockGroupsComponent } from './ui/stock-group/stock-groups.component';
import { StockItemsComponent } from './ui/stock-item/stock-items.component';
import { StockItemComponent } from './ui/stock-item/stock-item.component';
import { StockUnitsComponent } from './ui/stock-unit/stock-units.component';
import { StockUnitComponent } from './ui/stock-unit/stock-unit.component';

const routes: Routes = [
  {path : '', component : LoginComponent}, // default component or page
  {path : 'login', component : LoginComponent}, // login component
  {path : 'dashboard', component : DashboardComponent, canActivate: [RouteGaurdService]}, // dashboard component
  {path : 'stock-groups', component : StockGroupsComponent, canActivate: [RouteGaurdService]},
  {path : 'stock-group', component : StockGroupComponent, canActivate: [RouteGaurdService]},
  {path : 'stock-items', component : StockItemsComponent, canActivate: [RouteGaurdService]},
  {path : 'stock-item/:id', component : StockItemComponent, canActivate: [RouteGaurdService]},
  {path : 'stock-units', component : StockUnitsComponent, canActivate: [RouteGaurdService]},
  {path : 'stock-unit/:id', component : StockUnitComponent, canActivate: [RouteGaurdService]},

 // {path : '**', component :ErrorComponent}//for errors 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
