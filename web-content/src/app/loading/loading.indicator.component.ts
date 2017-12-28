import {Component, Input} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'loading-indicator',
    template: require('./loading.indicator.component.htm')
})
export class LoadingIndicatorComponent {

    constructor() {
    }

    private _doneLoading: Observable<void> = Observable.empty();


    @Input
    get doneLoading(): Observable<void> {
        return this._doneLoading;
    }

    set doneLoading(value: Observable<void>) {
        this._doneLoading = value;
    }

    doneLoading(): Observable<boolean> {
        return this.doneLoading
            .map(()=>true)
            .defaultIfEmpty(false);
    }


}
