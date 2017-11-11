import {Injectable} from "@angular/core";
import {LocalReach} from "../model/LocalReach.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LocalReachService {

    constructor() {

    }

    public createReach(reachFile: Observable<File>): LocalReach {
        return new LocalReach(reachFile);
    }
}