"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location(url) {
        this._url = url;
    }
    Object.defineProperty(Location.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.model.js.map