/**
 * Created by alex on 9/15/17.
 */
export class User {
    private _password: String;

    constructor(private login: String, private password: String) {
        this._username = login;
        this._password = password;
    }

    private _username: String;

    get username(): String {
        return this._username;
    }
}
