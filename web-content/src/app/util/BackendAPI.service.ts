import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ExportableLocalProject} from "../project/model/ExportableLocalProject.model";
import {UserPrincipal} from "../auth/UserPrincipal.model";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient, private userToken: UserPrincipal) {
    }


    postImage(formData: FormData): Observable<string> {
        return this.http.post('./api/image/save', formData, {
            headers: this.getHeaders(),
            responseType: 'text'
        });
    }

    fetchImage(_id: string): Observable<ArrayBuffer> {
        return this.http.get('./api/image/get/' + _id, {
            responseType: 'arraybuffer'
        });
    }

    fetchAllProjects(): Observable<Object> {
        return this.http.get('./api/projects', {
            responseType: 'json'
        });
    }

    removeProject(projectId: string): Observable<boolean> {
        return this.http.delete('./api/project/delete/' + projectId, {
            headers: this.getHeaders(),
            responseType: 'text'
        }).map(response => (response == 'true'));
    }

    postProject(exportableLocalProject: ExportableLocalProject): Observable<Object> {
        return this.http.post('./api/project/create', exportableLocalProject, {
            headers: this.getHeaders(),
            responseType: 'json'
        });
    }

    updateProject(exportableLocalProject: ExportableLocalProject): Observable<Object> {
        return this.http.post('./api/project/update', exportableLocalProject, {
            headers: this.getHeaders(),
            responseType: 'json'
        });
    }

    logoutUser(): Observable<boolean> {
        return Observable.of(false);
    }


    private getHeaders(): HttpHeaders {
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' + this.userToken.token);
        return headers;
    }
}