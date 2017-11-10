import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient) {
    }


    postImage(formData: FormData): Observable<string> {
        return this.http.post('./api/save/image', formData, {
            responseType: 'text'
        });
    }
}