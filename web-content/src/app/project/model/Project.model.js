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
var Description_model_1 = require("./Description.model");
var Location_model_1 = require("./Location.model");
var ProjectRank_model_1 = require("./ProjectRank.model");
var LocalReach_model_1 = require("./LocalReach.model");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(description, reach, background, location, rank) {
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (reach === void 0) { reach = new LocalReach_model_1.LocalReach(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        return _super.call(this, description, reach, background, location, rank) || this;
    }
    Object.defineProperty(Project.prototype, "url", {
        get: function () {
            return this.location.url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "preachySpeechy", {
        get: function () {
            return this.description.preachySpeechy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "excerpt", {
        get: function () {
            return this.description.excerpt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "reachBlob", {
        get: function () {
            return this.selectedReach.imageBinary();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "backgroundColor", {
        get: function () {
            return this.background.backgroundStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "descriptionTextColor", {
        get: function () {
            return this.background.textColor;
        },
        enumerable: true,
        configurable: true
    });
    return Project;
}(ExportableProject_1.ExportableProject));
exports.Project = Project;
//# sourceMappingURL=Project.model.js.map