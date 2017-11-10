"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background = /** @class */ (function () {
    function Background(colorOne, textColor) {
        this._backgroundStyle = colorOne;
        this._textColor = textColor;
    }
    Object.defineProperty(Background.prototype, "textColor", {
        get: function () {
            return this._textColor;
        },
        set: function (value) {
            this._textColor = value;
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