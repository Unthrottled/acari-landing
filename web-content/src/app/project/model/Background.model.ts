export class Background {
    constructor(colorOne: string = '#8d85d6',
                colorTwo: string = '#464646',
                textColor: string = '#f5f5f5',
                hostNameColor: string = 'orange',
                pwdColor: string = 'cyan',
                titleColor: string = 'ghostwhite',
                hoverColor: string = 'rgba(141, 133, 214, 0.55)') {
        this._colorOne = colorOne;
        this._colorTwo = colorTwo;
        this._textColor = textColor;
        this._hostNameColor = hostNameColor;
        this._pwdColor = pwdColor;
        this._titleColor = titleColor;
        this._hoverColor = hoverColor;
    }

    private _hostNameColor: string;
    private _pwdColor: string;
    private _titleColor: string;


    get hostNameColor(): string {
        return this._hostNameColor;
    }

    set hostNameColor(value: string) {
        this._hostNameColor = value;
    }

    get pwdColor(): string {
        return this._pwdColor;
    }

    set pwdColor(value: string) {
        this._pwdColor = value;
    }

    get titleColor(): string {
        return this._titleColor;
    }

    set titleColor(value: string) {
        this._titleColor = value;
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