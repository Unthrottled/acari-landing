"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var RemoteReach = /** @class */ (function () {
    function RemoteReach(file) {
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
        return Observable_1.Observable.of(this.loaded);
    };
    RemoteReach.prototype.imageBinary = function () {
        return this._rawFile;
    };
    return RemoteReach;
}());
exports.RemoteReach = RemoteReach;
//# sourceMappingURL=RemoteReach.model.js.map