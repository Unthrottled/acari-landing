"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Object_util_1 = require("../../util/Object.util");
var LocalReach = /** @class */ (function () {
    function LocalReach(file) {
        var _this = this;
        this.fileReader = new FileReader();
        //todo:needngzone
        this._rawFile = Observable_1.Observable.empty();
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        var self = this;
        this._selectedFile
            .filter(Object_util_1.isDefined)
            .subscribe(function (file) {
            _this.fileReader.onloadend = function (x) {
                self._rawFile = Observable_1.Observable.of(self.fileReader.result);
            };
            _this.fileReader.readAsDataURL(file);
        });
    }
    LocalReach.prototype.imageBinary = function () {
        console.log(this._rawFile);
        return this._rawFile
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