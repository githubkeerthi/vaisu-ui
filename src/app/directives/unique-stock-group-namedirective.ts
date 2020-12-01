import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup,  AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {duplicateValueCheck } from './must-match.validator';
import { StockGroup } from '../domain/stockgroup';
import { StockGroupService } from '../services/stock-group.service';

@Directive({
    selector: '[uniqueStockGroupName]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: ValidateStockGroupName, multi: true }]
})
export class ValidateStockGroupName implements Validator {
    constructor(private stockGroupService: StockGroupService) {}
    @Input() name: string;
    validate(formGroup: FormGroup): Promise<ValidationErrors |null> | Observable<ValidationErrors | null> {
        return duplicateValueCheck(this.name, this.stockGroupService)(formGroup);
    }
}
