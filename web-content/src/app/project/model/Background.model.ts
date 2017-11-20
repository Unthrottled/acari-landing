export class Background {
    constructor(colorOne: string = '#8d85d6',
                colorTwo: string = '#464646',
                textColor: string = '#f5f5f5',
                hoverColor: string = 'rgba(141, 133, 214, 0.25)') {
        this._colorOne = colorOne;
        this._colorTwo = colorTwo;
        this._textColor = textColor;
        this._hoverColor = hoverColor;
    }

    private _backgroundStyle: string;

    get backgroundStyle(): string {
        return this._backgroundStyle;
    }

    set backgroundStyle(value: string) {
        this._backgroundStyle = value;
    }

    private _colorOne: string;

    get colorOne(): string {
        return this._colorOne;
    }

    set colorOne(value: string) {
        this._colorOne = value;
        this.rebuildStyle();
    }

    private _colorTwo: string;

    get colorTwo(): string {
        return this._colorTwo;
    }

    set colorTwo(value: string) {
        this._colorTwo = value;
        this.rebuildStyle();
    }

    private _textColor: string;

    get textColor(): string {
        return this._textColor;
    }

    set textColor(value: string) {
        this._textColor = value;
    }

    private _hoverColor: string;


    get hoverColor(): string {
        return this._hoverColor;
    }

    set hoverColor(value: string) {
        this._hoverColor = value;
    }

    private rebuildStyle(): void {
        this.backgroundStyle = this.buildStyle();
    }

    private buildStyle(): string {
        let rgba = this._colorOne;
        let rgba2 = this._colorTwo;
        return "linear-gradient(to right, " + rgba + ", " + rgba2 + ")";
    }

}