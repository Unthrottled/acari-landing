
import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {isDefined} from "../../util/Object.util";

export class LocalReach implements ReachInterface {
    private fileReader: FileReader = new FileReader();

    private _rawFile: any;
    private _selectedFile: Observable<File>;
    constructor(file: Observable<any>) {
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        this.load()
    }

    private load(): void {
        let self = this;
        this._selectedFile
            .filter(isDefined)
            .subscribe(file => {
                this.fileReader.onloadend = x => self._rawFile = self.fileReader.result;
                this.fileReader.readAsDataURL(file);
            });
    }



    imageBinary(): Observable<any> {
        return Observable.of(this._rawFile)
            .filter(isDefined);
    }

    get selectedFile(): Observable<File> {
        return this._selectedFile;
    }

}