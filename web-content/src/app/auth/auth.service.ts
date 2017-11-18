import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {User} from "./user/user.model";
import {HostService} from "../session/host.service";
import {UserPrincipal} from "./UserPrincipal.model";
import {NewUser} from "./user/NewUser.model";
import {Permissions} from "./Permissions.component";
import {BackendService} from "../util/backend.service";

@Injectable()
export class AuthService {
    constructor(private http: Http,
                private hostService: HostService,
                private userToken: UserPrincipal,
                private backendService: BackendService) {

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
        return this.http.post(this.hostService.fetchUrl() + 'api/token', user)
            .map((response: Response) => {
                return response && response.json ?
                    response.json() : ''
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

    createPrincipal(user: NewUser): Observable<boolean> {
        let self = this;
        return this.http.post(this.hostService.fetchUrl() + 'user/create', user)
            .map((response: Response) => {
                return true
            });
    }

    logout(): Observable<boolean> {
        let observable = this.backendService.logoutUser()
            .map(payload => payload.succeded);
        observable.subscribe(success => this.isLoggedIn = false);
        return observable;
    }

    canCreate(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'create');
    }

    cantCreate(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'create')
            .map(b => !b);
    }

    canDelete(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'delete');
    }

    cantDelete(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'delete')
            .map(b => !b);
    }

    canUpdate(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'update');
    }

    cantUpdate(): Observable<boolean> {
        return Permissions.canActivate(this.userToken, 'update')
            .map(b => !b);
    }
}
