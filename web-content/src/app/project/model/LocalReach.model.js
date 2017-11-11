"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var util_1 = require("@angular/compiler/src/util");
var LocalReach = /** @class */ (function () {
    function LocalReach(file) {
        this.fileReader = new FileReader();
        this._selectedFile = file;
        //todo: replace this with the repeatable observable.
        this.load();
    }
    LocalReach.prototype.load = function () {
        var self = this;
        this.fileReader.onloadend = function (x) { return self._rawFile = self.fileReader.result; };
        this.fileReader.readAsDataURL(this._selectedFile);
    };
    LocalReach.prototype.imageBinary = function () {
        return Observable_1.Observable.of(this._rawFile)
            .filter(util_1.isDefined);
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