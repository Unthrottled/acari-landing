"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExportableProject = /** @class */ (function () {
    function ExportableProject(description, background, location, rank) {
        this._description = description;
        this._background = background;
        this._location = location;
        this._rank = rank;
    }
    Object.defineProperty(ExportableProject.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportableProject.prototype, "background", {
        get: function () {
            return this._background;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportableProject.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportableProject.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    return ExportableProject;
}());
exports.ExportableProject = ExportableProject;
//# sourceMappingURL=ExportableProject.js.map