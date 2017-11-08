import {Injectable} from "@angular/core";
import {BackendAPIService} from "../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProjectService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    projectCount(): Observable<number> {
        return Observable.of(0);
    }
}