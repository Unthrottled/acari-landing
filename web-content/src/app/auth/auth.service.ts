import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {User} from "./user/user.model";
import {UserPrincipal} from "./UserPrincipal.model";
import {BackendAPIService} from "../util/BackendAPI.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient,
                private userToken: UserPrincipal,
                private backendService: BackendAPIService) {

    }

    private _isLoggedIn = false;

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    set isLoggedIn(val: boolean) {
        this._isLoggedIn = val;
    }

    login(user: User): Observable<boolean> {
        let self = this;
        return this.http.post('./api/token', user, {
            responseType: 'text'
        })
            .map(json => {
                self.userToken.newUserPrincipal(json);
                return self.userToken;
            })
            .map((prince: UserPrincipal) => {
                self.isLoggedIn = true;
                return self.isLoggedIn;
            });
    }


    logout(): Observable<boolean> {
        let observable = this.backendService.logoutUser();
        observable.subscribe(success => this.isLoggedIn = false);
        return observable;
    }
}
