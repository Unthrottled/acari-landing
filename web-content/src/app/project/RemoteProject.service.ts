import {Injectable} from "@angular/core";
import {RemoteProject} from "./model/RemoteProject.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RemoteProjectService {

    constructor() {
    }

    fetchProjects(): Observable<RemoteProject[]> {
        return Observable.empty();
    }
}