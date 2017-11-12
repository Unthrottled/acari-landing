export class Location {
    private _url: string;
    private static defaultUrl: string = 'http://blog.acari.io';


    constructor(url: string = Location.defaultUrl) {
        this._url = url;
    }


    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}