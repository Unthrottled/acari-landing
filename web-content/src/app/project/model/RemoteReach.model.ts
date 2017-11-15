import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Identifier} from "./Identifier.model";

export class RemoteReach implements ReachInterface {
    private replaySubject = new ReplaySubject<Blob>(1);
    private loaded = false;
    private _rawFile: Observable<Blob>;

    constructor(identifier: Identifier = new Identifier(),
                file: Observable<Blob> = Observable.empty()) {

        file.subscribe(blob => {
            this.loaded = true;
            this.replaySubject.next(blob);
        });

        this._rawFile = file;
        this._identifier = identifier;
    }

    private _identifier: Identifier;

    get identifier(): Identifier {
        return this._identifier;
    }

    set identifier(value: Identifier) {
        this._identifier = value;
    }

    isLoaded(): boolean {
        return this.loaded;
    }

    imageBinary(): Observable<Blob> {
        return this._rawFile;
    }

}