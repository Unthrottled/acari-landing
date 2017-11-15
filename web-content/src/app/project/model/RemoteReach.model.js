"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var RemoteReach = /** @class */ (function () {
    function RemoteReach(file) {
        if (file === void 0) { file = Observable_1.Observable.empty(); }
        var _this = this;
        this.replaySubject = new ReplaySubject_1.ReplaySubject(1);
        this.loaded = false;
        file.subscribe(function (blob) {
            _this.loaded = true;
            _this.replaySubject.next(blob);
        });
        this._rawFile = file;
    }
    RemoteReach.prototype.isLoaded = function () {
        return this.loaded;
    };
    RemoteReach.prototype.imageBinary = function () {
        return this._rawFile;
    };
    return RemoteReach;
}());
exports.RemoteReach = RemoteReach;
//# sourceMappingURL=RemoteReach.model.js.map