"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Object_util_1 = require("../../util/Object.util");
var LocalReach = /** @class */ (function () {
    function LocalReach(file) {
        this.fileReader = new FileReader();
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        this.load();
    }
    LocalReach.prototype.load = function () {
        var _this = this;
        var self = this;
        this._selectedFile
            .filter(Object_util_1.isDefined)
            .subscribe(function (file) {
            _this.fileReader.onloadend = function (x) { return self._rawFile = self.fileReader.result; };
            _this.fileReader.readAsDataURL(file);
        });
    };
    LocalReach.prototype.imageBinary = function () {
        return Observable_1.Observable.of(this._rawFile)
            .filter(Object_util_1.isDefined);
    };
    Object.defineProperty(LocalReach.prototype, "selectedFile", {
        get: function () {
            return this._selectedFile;
        },
        enumerable: true,
        configurable: true
    });
    return LocalReach;
}());
exports.LocalReach = LocalReach;
//# sourceMappingURL=LocalReach.model.js.map