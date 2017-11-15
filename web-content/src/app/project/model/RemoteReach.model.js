"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var Identifier_model_1 = require("./Identifier.model");
var RemoteReach = /** @class */ (function () {
    function RemoteReach(identifier, file) {
        if (identifier === void 0) { identifier = new Identifier_model_1.Identifier(); }
        if (file === void 0) { file = Observable_1.Observable.empty(); }
        var _this = this;
        this.replaySubject = new ReplaySubject_1.ReplaySubject(1);
        this.loaded = false;
        file.subscribe(function (blob) {
            _this.loaded = true;
            _this.replaySubject.next(blob);
        });
        this._rawFile = file;
        this._identifier = identifier;
    }
    Object.defineProperty(RemoteReach.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
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