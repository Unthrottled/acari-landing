
import {Injectable} from "@angular/core";
import {HttpRequest, HttpClient} from "@angular/common/http";


@Injectable()
export class BackendAPIService {


    constructor(private http: HttpClient){}


    postImage(formData: FormData){
        return this.http.request(new HttpRequest('POST', '/save', formData, {
            reportProgress: true,
            responseType: 'text'
        }));
    }
}