import { FormGroup } from '@angular/forms';
import { StockGroupService } from '../services/stock-group.service';
import { StockGroup } from '../domain/stockgroup';
import { map } from 'rxjs/operators';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

// custom validator to check that two fields match
export function duplicateValueCheck(selectedValue: string, stockGroupService: StockGroupService) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[selectedValue];
        // return null if controls haven't initialised yet
        if (!control) {
          return null;
        }
        if (control.value) {// checks null, undefined, ""
            stockGroupService.isStockGroupNameExists(control.value).pipe(
             map(result => {
                 return result ? { unique: true } : null;
                })
           );
    }
 };
}
