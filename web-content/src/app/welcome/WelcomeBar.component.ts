import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
    selector: 'welcome-bar',
    template: require('./WelcomeBar.component.htm')
})
export class WelcomeBarComponent implements OnInit {

    @Output()
    private writeComplete = new EventEmitter<void>();

    constructor() {
    }

    private _content: string = '';

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    private _words: string = '';

    @Input()
    get words(): string {
        return this._words;
    }

    set words(value: string) {
        this._words = value;
    }

    private isTyping: Subject<boolean> = new ReplaySubject<boolean>();

    get typing(): Observable<boolean> {
        return this.isTyping;
    }

    get notTyping(): Observable<boolean>{
        return this.isTyping.map(b=>!b);
    }

    ngOnInit(): void {
        this.isTyping.next(false);
        Observable.of(1)
            .delay(1000)
            .map((value => {
                this.isTyping.next(true);
                return value;
            }))
            .flatMap(seed => Observable.interval(45))
            .takeWhile(value => value <= this.words.length)
            .map(value => this.words.charAt(value))
            .subscribe(newChar=>this.content+=newChar, (error)=>{}, ()=>{
                this.isTyping.next(false);
                this.isTyping.complete();
            });
    }
}