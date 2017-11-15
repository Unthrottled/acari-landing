import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LocalProject} from "../project/model/LocalProject.model";
import {RemoteProject} from "../project/model/RemoteProject.model";
import {RemoteProjectFactory} from "../project/RemoteProject.factory";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient
    ,private remoteProjectFactory: RemoteProjectFactory) {
    }


    postImage(formData: FormData): Observable<string> {
        return this.http.post('./api/image/save', formData, {
            responseType: 'text'
        });
    }

    fetchImage(_id: string): Observable<Blob> {
        return this.http.get('./api/image/get' + _id, {
            responseType: 'blob'
        });
    }

    postProject(localProject: LocalProject): Observable<RemoteProject> {
        return this.http.post('./api/project/create', localProject, {
            responseType: 'json'
        }).map(this.remoteProjectFactory.createProject)
    }
}