import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { StockGroupComponent } from './ui/stock-group/stock-group.component';
import { StockItemComponent } from './ui/stock-item/stock-item.component';
import { StockUnitComponent } from './ui/stock-unit/stock-unit.component';
import { StockGroupsComponent } from './ui/stock-group/stock-groups.component';
import { StockItemsComponent } from './ui/stock-item/stock-items.component';
import { StockUnitsComponent } from './ui/stock-unit/stock-units.component';
import { LeftNavComponent } from './ui/left-nav/left-nav.component';
import { BodyContentComponent } from './ui/body-content/body-content.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { EventEmitterService } from './services/event-emitter.service';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MustMatchDirective } from './directives/must-match.directive';
import { DuplicateValueCheck } from './directives/duplicate-value-check.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        StockGroupComponent,
        StockGroupsComponent,
        StockItemComponent,
        StockItemsComponent,
        StockUnitComponent,
        StockUnitsComponent,
        LeftNavComponent,
        BodyContentComponent,
        HeaderComponent,
        FooterComponent,
        MustMatchDirective,
        DuplicateValueCheck
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule

    ],
    providers: [EventEmitterService],
    bootstrap: [AppComponent]
})
export class AppModule { }
