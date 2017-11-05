import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient) {
    }


    postImage(formData: FormData): Observable<HttpEvent<Blob>> {
        return this.http.post('./api/save', formData, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob'
        });
    }
}