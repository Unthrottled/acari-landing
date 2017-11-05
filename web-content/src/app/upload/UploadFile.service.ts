import {Injectable} from "@angular/core";
import {BackendAPIService} from "../util/BackendAPI.service";

@Injectable()
export class UploadFileService {
    constructor(private backendAPIService: BackendAPIService) {

    }

    pushFileToStorage(file: File) {
        let formData = new FormData();
        formData.append('file', file);
        this.backendAPIService.postImage(formData);
    }
}