import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {LocalProject} from "../model/LocalProject.model";
import {RemoteProject} from "../model/RemoteProject.model";
import {ExportableReach} from "../model/ExportableReach.model";
import {Identifier} from "../model/Identifier.model";
import {RemoteProjectFactory} from "../RemoteProject.factory";
import {ImageUploadService} from "./ImageUpload.service";

@Injectable()
export class ProjectUploadService {
    constructor(private backendAPIService: BackendAPIService,
                private remoteProjectFactory: RemoteProjectFactory,
                private imageUploadService: ImageUploadService) {

    }

    pushFileToStorage(projectToUpload: LocalProject): Observable<RemoteProject> {
        return this.imageUploadService.uploadReach(projectToUpload.reachFile)
            .map(reachId => new ExportableReach(new Identifier(reachId)))
            .map(reach => projectToUpload.exportableLocalProject(reach))
            .flatMap(project => this.backendAPIService.postProject(project)
                .map(json => this.remoteProjectFactory.createProject(json)));
    }
}