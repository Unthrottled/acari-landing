import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {HttpEvent, HttpResponse} from "@angular/common/http";
import {Project} from "../Project.model";

@Injectable()
export class ProjectUploadService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(projectToUpload: Project): Observable<boolean> {
        let formData = new FormData();
        formData.append('reach', projectToUpload.selectedReach.selectedFile);
        return this.backendAPIService.postImage(formData)
            .map((httpEvent: HttpEvent<Blob>) => httpEvent instanceof HttpResponse);
    }
}