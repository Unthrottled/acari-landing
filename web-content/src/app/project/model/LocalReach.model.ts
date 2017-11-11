import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {NgZone} from "@angular/core";
import {Observer} from "rxjs/Observer";
import {ReplaySubject} from "rxjs/ReplaySubject";

export class LocalReach implements ReachInterface {
    private repeat = new ReplaySubject<MSBaseReader>(1);

    //todo:needngzone
    private _rawFile: Observable<MSBaseReader>;

    constructor(file: Observable<any>, private ngZone: NgZone) {
        this._selectedFile = file;
        let self = this;
        this._selectedFile
            .subscribe(file=>{
                let fileReader = new FileReader();
                fileReader.onload = event => {
                    this.repeat.next(fileReader.result);
                };
                fileReader.readAsDataURL(file);
            });
        this._rawFile = this.repeat;
    }

    private _selectedFile: Observable<File>;

    get selectedFile(): Observable<File> {
        return this._selectedFile;
    }

    imageBinary(): Observable<MSBaseReader> {
        return this._rawFile
            .map(b => {
                return b;
            });
    }

}