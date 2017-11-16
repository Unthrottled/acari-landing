import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {LocalProject} from "../model/LocalProject.model";
import {isDefined} from "../../util/Object.util";
import {RemoteProject} from "../model/RemoteProject.model";
import {ExportableReach} from "../model/ExportableReach.model";
import {Identifier} from "../model/Identifier.model";

@Injectable()
export class ProjectUploadService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(projectToUpload: LocalProject): Observable<RemoteProject> {
        console.log(JSON.stringify(projectToUpload.exportableLocalProject(new ExportableReach(new Identifier('a')))));
        return projectToUpload.reachFile
            .map(reachFile => {
                let formData = new FormData();
                formData.append('reach', reachFile);
                return formData
            })
            .flatMap(formData =>
                this.backendAPIService.postImage(formData)
                    .map((imageId: string) => new RemoteProject()));
    }
}