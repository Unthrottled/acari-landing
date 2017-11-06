export class Background {
    private _image: Blob;
    private _colorOne: string;
    private _colorTwo: string;


    constructor(image: Blob, colorOne: string, colorTwo: string) {
        this._image = image;
        this._colorOne = colorOne;
        this._colorTwo = colorTwo;
    }


    get image(): Blob {
        return this._image;
    }

    set image(value: Blob) {
        this._image = value;
    }

    get colorOne(): string {
        return this._colorOne;
    }

    set colorOne(value: string) {
        this._colorOne = value;
    }

    get colorTwo(): string {
        return this._colorTwo;
    }

    set colorTwo(value: string) {
        this._colorTwo = value;
    }
}