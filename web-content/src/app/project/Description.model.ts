export class Description {
    private _excerpt: string;
    private _preachySpeechy: string;


    constructor(excerpt: string, preachySpeechy: string) {
        this._excerpt = excerpt;
        this._preachySpeechy = preachySpeechy;
    }


    get excerpt(): string {
        return this._excerpt;
    }

    set excerpt(value: string) {
        this._excerpt = value;
    }

    get preachySpeechy(): string {
        return this._preachySpeechy;
    }

    set preachySpeechy(value: string) {
        this._preachySpeechy = value;
    }
}