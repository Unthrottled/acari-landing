import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {LocalProject} from "../model/LocalProject.model";
import {isDefined} from "../../util/Object.util";

@Injectable()
export class ProjectUploadService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(projectToUpload: LocalProject): Observable<boolean> {
        return projectToUpload.reachFile
            .filter(isDefined)
            .map(reachFile => {
                let formData = new FormData();
                formData.append('reach', reachFile);
                return formData
            })
            .flatMap(formData =>
                this.backendAPIService.postImage(formData)
                    .map((imageId: string) => imageId.length > 0));
    }
}