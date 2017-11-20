"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background = /** @class */ (function () {
    function Background(colorOne, colorTwo, textColor, hoverColor) {
        if (colorOne === void 0) { colorOne = '#8d85d6'; }
        if (colorTwo === void 0) { colorTwo = '#464646'; }
        if (textColor === void 0) { textColor = '#f5f5f5'; }
        if (hoverColor === void 0) { hoverColor = 'rgba(141, 133, 214, 0.25)'; }
        this._colorOne = colorOne;
        this._colorTwo = colorTwo;
        this._textColor = textColor;
        this._hoverColor = hoverColor;
    }
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
    Object.defineProperty(Background.prototype, "colorOne", {
        get: function () {
            return this._colorOne;
        },
        set: function (value) {
            this._colorOne = value;
            this.rebuildStyle();
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
            this.rebuildStyle();
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Background.prototype, "hoverColor", {
        get: function () {
            return this._hoverColor;
        },
        set: function (value) {
            this._hoverColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Background.prototype.rebuildStyle = function () {
        this.backgroundStyle = this.buildStyle();
    };
    Background.prototype.buildStyle = function () {
        var rgba = this._colorOne;
        var rgba2 = this._colorTwo;
        return "linear-gradient(to right, " + rgba + ", " + rgba2 + ")";
    };
    return Background;
}());
exports.Background = Background;
//# sourceMappingURL=Background.model.js.map