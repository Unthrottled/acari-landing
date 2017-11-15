import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "../model/RemoteProject.model";

@Injectable()
export class ProjectUpdateService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    updateFileInStorage(projectToUpload: RemoteProject): Observable<boolean> {
        return Observable.of(true);
    }
}