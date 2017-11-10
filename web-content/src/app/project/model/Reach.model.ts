export class Reach {
    private _reachId: string;
    private _rawFile: any;
    private _selectedFile: File;
    constructor(reachBinary: any) {
        this._rawFile = reachBinary;
    }


    get reachId(): string {
        return this._reachId;
    }


    set reachId(value: string) {
        this._reachId = value;
    }

    get rawFile(): any {
        return this._rawFile;
    }

    set rawFile(value: any) {
        this._rawFile = value;
    }

    get selectedFile(): File {
        return this._selectedFile;
    }

    set selectedFile(value: File) {
        this._selectedFile = value;
    }
}