import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {isDefined} from "../../util/Object.util";

@Injectable()
export class ImageUploadService {


    constructor(private backendAPIService: BackendAPIService) {
    }

    public uploadReach(reachFile: Observable<File>): Observable<string> {
        return reachFile
            .filter(isDefined)
            .map(reachFile => {
                let formData = new FormData();
                formData.append('reach', reachFile);
                return formData
            }).flatMap(formData =>
                this.backendAPIService.postImage(formData))
    }
}