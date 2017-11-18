/**
 * Created by alex on 9/16/17.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class UserPrincipal {
    constructor() {

    }

    private _canView: boolean;

    get canView(): boolean {
        return this._canView;
    }

    private _canDelete: boolean;

    get canDelete(): boolean {
        return this._canDelete;
    }

    private _canCreate: boolean;

    get canCreate(): boolean {
        return this._canCreate;
    }

    private _canUpdate: boolean;

    get canUpdate(): boolean {
        return this._canUpdate;
    }

    private _token: String;

    get token(): String {
        return this._token
    }

    private _role: String;

    get role(): String {
        return this._role;
    }

    private _username: String;

    get username(): String {
        return this._username;
    }

    newUserPrincipal(principal: any) {
        this.setFields(principal);
    }

    private setFields(principal: any) {
        this._canView = principal.principal.canView;
        this._canCreate = principal.principal.canCreate;
        this._canUpdate = principal.principal.canUpdate;
        this._canDelete = principal.principal.canDelete;
        this._token = principal.token;
        this._role = principal.principal.role;
        this._username = principal.principal.username;
    }
}
