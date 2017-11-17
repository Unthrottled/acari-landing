import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LocalProject} from "../project/model/LocalProject.model";
import {RemoteProject} from "../project/model/RemoteProject.model";
import {RemoteProjectFactory} from "../project/RemoteProject.factory";
import {ExportableLocalProject} from "../project/model/ExportableLocalProject.model";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient) {
    }


    postImage(formData: FormData): Observable<string> {
        return this.http.post('./api/image/save', formData, {
            responseType: 'text'
        });
    }

    fetchImage(_id: string): Observable<Blob> {
        return this.http.get('./api/image/get/' + _id, {
            responseType: 'blob'
        });
    }

    fetchAllImages(): Observable<Object> {
        return this.http.get('./api/projects', {
            responseType: 'json'
        });
    }

    postProject(exportableLocalProject: ExportableLocalProject): Observable<Object> {
        return this.http.post('./api/project/create', exportableLocalProject, {
            responseType: 'json'
        });
    }
}