import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "../model/RemoteProject.model";
import {ExportableReach} from "../model/ExportableReach.model";
import {Identifier} from "../model/Identifier.model";
import {RemoteProjectFactory} from "../RemoteProject.factory";
import {ImageUploadService} from "./ImageUpload.service";

@Injectable()
export class ProjectUpdateService {
    constructor(private backendAPIService: BackendAPIService,
                private remoteProjectFactory: RemoteProjectFactory,
                private imageUploadService: ImageUploadService) {

    }

    updateFileInStorage(projectToUpload: RemoteProject): Observable<RemoteProject> {
        return this.packageReach(projectToUpload)
            .map(reachToExport => projectToUpload.exportableLocalProject(reachToExport))
            .flatMap(project => this.backendAPIService.updateProject(project)
                .map(json => this.remoteProjectFactory.createProject(json)));
    }

    private packageReach(projecttoUplead: RemoteProject) {
        return this.fetchReach(projecttoUplead)
            .map(reachId => new ExportableReach(new Identifier(reachId)))
    }

    private fetchReach(projectToUpload: RemoteProject): Observable<string> {
        if (projectToUpload.imageChanged) {
            return this.imageUploadService.uploadReach(projectToUpload.reachFile)
        } else {
            return Observable.of(projectToUpload.reachId)
        }
    }
}