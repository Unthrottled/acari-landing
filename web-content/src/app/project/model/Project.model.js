"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExportableProject_1 = require("./ExportableProject");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Project.prototype, "url", {
        get: function () {
            return this._location.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "preachySpeechy", {
        get: function () {
            return this._description.preachySpeechy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "excerpt", {
        get: function () {
            return this._description.excerpt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "reachBlob", {
        get: function () {
            return this._selectedReach.rawFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "reachFile", {
        get: function () {
            return this._selectedReach.selectedFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "backgroundColor", {
        get: function () {
            return this._background.backgroundStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "descriptionTextColor", {
        get: function () {
            return this._background.textColor;
        },
        enumerable: true,
        configurable: true
    });
    return Project;
}(ExportableProject_1.ExportableProject));
exports.Project = Project;
//# sourceMappingURL=Project.model.js.map