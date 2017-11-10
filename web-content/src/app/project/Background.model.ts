export class Background {
    private _backgroundStyle: string;
    private _textColor: string;


    constructor(colorOne: string, textColor: string) {
        this._backgroundStyle = colorOne;
        this._textColor = textColor;
    }


    get textColor(): string {
        return this._textColor;
    }

    set textColor(value: string) {
        this._textColor = value;
    }

    get backgroundStyle(): string {
        return this._backgroundStyle;
    }

    set backgroundStyle(value: string) {
        this._backgroundStyle = value;
    }
}