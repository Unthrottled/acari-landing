import {Component, HostListener, Input} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'caret',
    template: require('./Caret.component.htm')
})
export class CaretComponent {
    private isBlurred: Subject<boolean> = new BehaviorSubject<boolean>(false);

    @HostListener('window:focus', ['$event'])
    onFocus(event: any): void {
        this.isBlurred.next(false);
    }

    @HostListener('window:blur', ['$event'])
    onBlur(event: any): void {
        this.isBlurred.next(true);
    }

    get blurred(): Observable<boolean>{
        return this.isBlurred;
    }

    private _typing: Observable<boolean> = Observable.of(false);


    @Input()
    get typing(): Observable<boolean> {
        return this._typing;
    }

    get notTyping(): Observable<boolean> {
        return this._typing
            .map(b=>!b)
            .withLatestFrom(this.isBlurred, (notTyping: boolean, windowBlurred: boolean)=>notTyping && !windowBlurred);
    }

    set typing(value: Observable<boolean>) {
        this._typing = value;
    }
}
