"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Location = /** @class */ (function () {
    function Location(url) {
        if (url === void 0) { url = Location.defaultUrl; }
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
    Location.defaultUrl = 'http://blog.acari.io';
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.model.js.map