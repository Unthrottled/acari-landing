import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {HttpEvent, HttpResponse} from "@angular/common/http";

@Injectable()
export class UploadFileService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(file: File): Observable<boolean> {
        let formData = new FormData();
        formData.append('file', file);
        return this.backendAPIService.postImage(formData)
            .map((httpEvent: HttpEvent<Blob>) => httpEvent instanceof HttpResponse);
    }
}