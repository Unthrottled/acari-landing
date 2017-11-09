"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(description, reach, background, location) {
        this._description = description;
        this._selectedReach = reach;
        this._background = background;
        this._location = location;
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
}());
exports.Project = Project;
//# sourceMappingURL=Project.model.js.map