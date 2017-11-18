"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by alex on 9/15/17.
 */
var User = (function () {
    function User(login, password) {
        this.login = login;
        this.password = password;
        this._username = login;
        this._password = password;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map