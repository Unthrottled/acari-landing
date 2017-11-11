import {ReachInterface} from "./ReachInterface";
import {Observable} from "rxjs/Observable";

export class RemoteReach implements ReachInterface {
    private _reachId: string;

    constructor(id: string) {
        this._reachId = id;
    }

    imageBinary(): Observable<any> {
        return Observable.empty();
    }

}