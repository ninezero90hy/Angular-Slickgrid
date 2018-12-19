/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { mapMomentDateFormatWithFieldType } from './../services/utilities';
import { FieldType } from './../models/index';
import { compareDates } from './compareDateUtility';
/** @type {?} */
var FORMAT = mapMomentDateFormatWithFieldType(FieldType.dateUs);
/** @type {?} */
export var dateUsSorter = function (value1, value2, sortDirection) {
    return compareDates(value1, value2, FORMAT, sortDirection, true);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVVzU29ydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1zbGlja2dyaWQvIiwic291cmNlcyI6WyJhcHAvbW9kdWxlcy9hbmd1bGFyLXNsaWNrZ3JpZC9zb3J0ZXJzL2RhdGVVc1NvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFDOUMsTUFBTSxHQUFHLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7O0FBRWpFLE1BQU0sS0FBTyxZQUFZLEdBQVcsVUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWE7SUFDaEUsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYXBNb21lbnREYXRlRm9ybWF0V2l0aEZpZWxkVHlwZSB9IGZyb20gJy4vLi4vc2VydmljZXMvdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBTb3J0ZXIgfSBmcm9tICcuLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7IGNvbXBhcmVEYXRlcyB9IGZyb20gJy4vY29tcGFyZURhdGVVdGlsaXR5JztcclxuY29uc3QgRk9STUFUID0gbWFwTW9tZW50RGF0ZUZvcm1hdFdpdGhGaWVsZFR5cGUoRmllbGRUeXBlLmRhdGVVcyk7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZVVzU29ydGVyOiBTb3J0ZXIgPSAodmFsdWUxLCB2YWx1ZTIsIHNvcnREaXJlY3Rpb24pID0+IHtcclxuICByZXR1cm4gY29tcGFyZURhdGVzKHZhbHVlMSwgdmFsdWUyLCBGT1JNQVQsIHNvcnREaXJlY3Rpb24sIHRydWUpO1xyXG59O1xyXG4iXX0=