"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background = /** @class */ (function () {
    function Background(image, colorOne) {
        this._image = image;
        this._backgroundStyle = colorOne;
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
    Object.defineProperty(Background.prototype, "backgroundStyle", {
        get: function () {
            return this._backgroundStyle;
        },
        set: function (value) {
            this._backgroundStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    return Background;
}());
exports.Background = Background;
//# sourceMappingURL=Background.model.js.map