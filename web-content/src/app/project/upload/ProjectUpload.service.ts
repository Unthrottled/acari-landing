import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {HttpEvent, HttpResponse} from "@angular/common/http";
import {Project} from "../model/Project.model";
import {LocalProject} from "../model/LocalProject.model";

@Injectable()
export class ProjectUploadService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(projectToUpload: LocalProject): Observable<boolean> {
        let formData = new FormData();
        formData.append('reach', projectToUpload.reachFile);
        return this.backendAPIService.postImage(formData)
            .map((imageId: string) => imageId.length > 0);
    }
}