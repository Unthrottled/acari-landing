import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";

export class RemoteReach implements ReachInterface {

    private _rawFile: Observable<Blob>;

    constructor(file: Observable<Blob>) {
        this._rawFile = file;
    }

    imageBinary(): Observable<Blob> {
        return this._rawFile;
    }

}