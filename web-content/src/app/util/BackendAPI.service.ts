
import {Injectable} from "@angular/core";
import {HttpRequest, HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient){}


    postImage(formData: FormData): Observable<HttpEvent<any>> {
        return this.http.request(new HttpRequest('POST', '/save', formData, {
            reportProgress: true,
            responseType: 'text'
        }));
    }
}