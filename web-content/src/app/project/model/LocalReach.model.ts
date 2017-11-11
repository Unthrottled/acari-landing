
import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {isDefined} from "../../util/Object.util";

export class LocalReach implements ReachInterface {
    private fileReader: FileReader = new FileReader();

    //todo:needngzone
    private _rawFile: Observable<any> = Observable.empty();
    private _selectedFile: Observable<File>;
    constructor(file: Observable<any>) {
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        let self = this;
        this._selectedFile
            .filter(isDefined)
            .subscribe(file => {
                this.fileReader.onloadend = x => {
                    self._rawFile = Observable.of(self.fileReader.result);
                };
                this.fileReader.readAsDataURL(file);
            });
    }

    imageBinary(): Observable<any> {
        console.log(this._rawFile);
        return this._rawFile
            .filter(isDefined);
    }

    get selectedFile(): Observable<File> {
        return this._selectedFile;
    }

}