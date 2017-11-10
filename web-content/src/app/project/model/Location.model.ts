export class Location {
    private _url: string;


    constructor(url: string) {
        this._url = url;
    }


    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}