export class Background {
    private _image: Blob;
    private _backgroundStyle: string;



    constructor(image: Blob, colorOne: string) {
        this._image = image;
        this._backgroundStyle = colorOne;
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