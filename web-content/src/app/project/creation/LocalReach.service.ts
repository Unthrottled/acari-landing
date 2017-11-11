
import {Injectable, NgZone} from "@angular/core";
import {LocalReach} from "../model/LocalReach.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalReachService {

    constructor(private ngZone: NgZone){

    }

    public createReach(reachFile: Observable<File>): LocalReach {
        return new LocalReach(reachFile, this.ngZone);
    }
}