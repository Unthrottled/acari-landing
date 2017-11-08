"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Description = /** @class */ (function () {
    function Description(excerpt, preachySpeechy) {
        this._excerpt = excerpt;
        this._preachySpeechy = preachySpeechy;
    }
    Object.defineProperty(Description.prototype, "excerpt", {
        get: function () {
            return this._excerpt;
        },
        set: function (value) {
            this._excerpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Description.prototype, "preachySpeechy", {
        get: function () {
            return this._preachySpeechy;
        },
        set: function (value) {
            this._preachySpeechy = value;
        },
        enumerable: true,
        configurable: true
    });
    return Description;
}());
exports.Description = Description;
//# sourceMappingURL=Description.model.js.map