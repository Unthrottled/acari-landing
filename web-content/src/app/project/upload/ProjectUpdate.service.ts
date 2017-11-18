import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "../model/RemoteProject.model";
import {ExportableReach} from "../model/ExportableReach.model";
import {Identifier} from "../model/Identifier.model";
import {RemoteProjectFactory} from "../RemoteProject.factory";

@Injectable()
export class ProjectUpdateService {
    constructor(private backendAPIService: BackendAPIService,
                private remoteProjectFactory: RemoteProjectFactory,) {

    }

    updateFileInStorage(projectToUpload: RemoteProject): Observable<RemoteProject> {
        return this.fetchReach(projectToUpload)
            .map(reachToExport=>projectToUpload.exportableLocalProject(reachToExport))
            .flatMap(project => this.backendAPIService.updateProject(project)
                .map(json => this.remoteProjectFactory.createProject(json)));
    }

    private fetchReach(projectToUpload: RemoteProject): Observable<ExportableReach> {
        if(projectToUpload.imageChanged){

        } else {
            return Observable.of(new ExportableReach(new Identifier(projectToUpload.reachId)))
        }
    }
}