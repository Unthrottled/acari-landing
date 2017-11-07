import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'text-entry',
    template: require('./TextEntry.component.htm')
})
export class TextEntryComponent {

    @Output()
    private textValueChange = new EventEmitter<string>();

    private _textValue: string;


    @Input()
    get textValue(): string {
        return this._textValue;
    }

    set textValue(value: string) {
        this._textValue = value;
        this.textValueChange.emit(this._textValue);
    }
}