export class Background {
    private _image: Blob;
    private _backgroundStyle: string;
    private _textColor: string;


    constructor(image: Blob, colorOne: string, textColor: string) {
        this._image = image;
        this._backgroundStyle = colorOne;
        this._textColor = textColor;
    }


    get textColor(): string {
        return this._textColor;
    }

    set textColor(value: string) {
        this._textColor = value;
    }

    get image(): Blob {
        return this._image;
    }

    set image(value: Blob) {
        this._image = value;
    }

    get backgroundStyle(): string {
        return this._backgroundStyle;
    }

    set backgroundStyle(value: string) {
        this._backgroundStyle = value;
    }
}