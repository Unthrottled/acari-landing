
import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {isDefined} from "@angular/compiler/src/util";

export class LocalReach implements ReachInterface {
    private fileReader: FileReader = new FileReader();

    private _rawFile: any;
    private _selectedFile: File;
    constructor(file: any) {
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        this.load()
    }

    private load(): void {
        let self = this;
        this.fileReader.onloadend = x => self._rawFile = self.fileReader.result;
        this.fileReader.readAsDataURL(this._selectedFile);
    }


    imageBinary(): Observable<any> {
        return Observable.of(this._rawFile)
            .filter(isDefined);
    }

    get selectedFile(): File {
        return this._selectedFile;
    }

}