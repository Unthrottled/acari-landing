import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

export class RemoteReach implements ReachInterface {
    private replaySubject = new ReplaySubject<Blob>(1);
    private loaded = false;
    private _rawFile: Observable<Blob>;

    constructor(file: Observable<Blob> = Observable.empty()) {

        file.subscribe(blob => {
            this.loaded = true;
            this.replaySubject.next(blob);
        });

        this._rawFile = file;
    }

    isLoaded(): boolean {
        return this.loaded;
    }

    imageBinary(): Observable<Blob> {
        return this._rawFile;
    }

}