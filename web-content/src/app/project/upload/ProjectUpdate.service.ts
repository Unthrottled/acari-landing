import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "../model/RemoteProject.model";
import {ExportableReach} from "../model/ExportableReach.model";
import {Identifier} from "../model/Identifier.model";

@Injectable()
export class ProjectUpdateService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    updateFileInStorage(projectToUpload: RemoteProject): Observable<RemoteProject> {
        return this.fetchReach(projectToUpload);
    }

    private fetchReach(projectToUpload: RemoteProject): Observable<ExportableReach> {
        if(projectToUpload.imageChanged){

        } else {
            return Observable.of(new ExportableReach(new Identifier(projectToUpload.reachId)))
        }
    }
}