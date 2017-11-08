"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background = /** @class */ (function () {
    function Background(image, colorOne, colorTwo) {
        this._image = image;
        this._colorOne = colorOne;
        this._colorTwo = colorTwo;
    }
    Object.defineProperty(Background.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Background.prototype, "colorOne", {
        get: function () {
            return this._colorOne;
        },
        set: function (value) {
            this._colorOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Background.prototype, "colorTwo", {
        get: function () {
            return this._colorTwo;
        },
        set: function (value) {
            this._colorTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    return Background;
}());
exports.Background = Background;
//# sourceMappingURL=Background.model.js.map