import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


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
        return this.http.get('./api/image/get' + _id, {
            responseType: 'blob'
        });
    }
}