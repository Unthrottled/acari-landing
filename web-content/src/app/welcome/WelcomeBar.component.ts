import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'welcome-bar',
    template: require('./WelcomeBar.component.htm')
})
export class WelcomeBarComponent implements OnInit {

    @Output()
    private writeComplete = new EventEmitter<void>();

    constructor() {
    }

    private _content: Observable<string> = Observable.empty();

    get content(): Observable<string> {
        return this._content;
    }

    set content(value: Observable<string>) {
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

    ngOnInit(): void {
        this.content = Observable.interval(100)
            .takeWhile(value => value <= this.words.length)
            .map(value => this.words.substr(0, value))
    }
}