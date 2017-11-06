export class Reach {
    private _reachId: string;
    private _rawFile: Blob;
    private _selectedFile: File;
    constructor(reachId: string) {
        this._reachId = reachId;
    }


    get reachId(): string {
        return this._reachId;
    }


    set reachId(value: string) {
        this._reachId = value;
    }

    get rawFile(): Blob {
        return this._rawFile;
    }

    set rawFile(value: Blob) {
        this._rawFile = value;
    }

    get selectedFile(): File {
        return this._selectedFile;
    }

    set selectedFile(value: File) {
        this._selectedFile = value;
    }
}