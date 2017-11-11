"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var LocalReach = /** @class */ (function () {
    function LocalReach(file, ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.repeat = new ReplaySubject_1.ReplaySubject(1);
        this._selectedFile = file;
        var self = this;
        this._selectedFile
            .subscribe(function (file) {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                _this.repeat.next(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        });
        this._rawFile = this.repeat;
    }
    Object.defineProperty(LocalReach.prototype, "selectedFile", {
        get: function () {
            return this._selectedFile;
        },
        enumerable: true,
        configurable: true
    });
    LocalReach.prototype.imageBinary = function () {
        return this._rawFile
            .map(function (b) {
            console.log('datboi' + b.toString().substr(0, 50));
            return b;
        });
    };
    return LocalReach;
}());
exports.LocalReach = LocalReach;
//# sourceMappingURL=LocalReach.model.js.map