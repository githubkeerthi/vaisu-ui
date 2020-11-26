import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup,  AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {duplicateValueCheck } from './must-match.validator';
import { StockGroup } from '../domain/stockgroup';
import { StockGroupService } from '../services/stock-group.service';

@Directive({
    selector: '[appDuplicateValueCheck]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DuplicateValueCheck, multi: true }]
})
export class DuplicateValueCheck implements Validator {
    constructor() {}
    @Input() name: string;
    @Input() id: number;
    @Input() stockGroups: StockGroup[];
    validate(formGroup: FormGroup): ValidationErrors {
        return duplicateValueCheck(this.name, this.id, this.stockGroups)(formGroup);
    }
}
