"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Description_model_1 = require("./Description.model");
var Location_model_1 = require("./Location.model");
var Background_model_1 = require("./Background.model");
var ProjectRank_model_1 = require("./ProjectRank.model");
var LocalReach_model_1 = require("./LocalReach.model");
var ExportableLocalProject_model_1 = require("./ExportableLocalProject.model");
var Project = /** @class */ (function () {
    function Project(description, reach, background, location, rank) {
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (reach === void 0) { reach = new LocalReach_model_1.LocalReach(); }
        if (background === void 0) { background = new Background_model_1.Background(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        this._dirty = false;
        this._selectedReach = reach;
        this._description = description;
        this._background = background;
        this._location = location;
        this._rank = rank;
    }
    Object.defineProperty(Project.prototype, "exportableLocalProject", {
        get: function () {
            return new ExportableLocalProject_model_1.ExportableLocalProject(this.description, this.background, this.location, this.rank);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "selectedReach", {
        get: function () {
            return this._selectedReach;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this._selectedReach = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "dirtyGurl", {
        get: function () {
            return this._dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "url", {
        get: function () {
            return this.location.url;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.location.url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "textColor", {
        get: function () {
            return this.background.textColor;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.background.textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "colorTwo", {
        get: function () {
            return this.background.colorTwo;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.background.colorTwo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "colorOne", {
        get: function () {
            return this.background.colorOne;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.background.colorOne = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "preachySpeechy", {
        get: function () {
            return this.description.preachySpeechy;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.description.preachySpeechy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "projectRank", {
        get: function () {
            return this.rank.rank;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.rank.rank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "excerpt", {
        get: function () {
            return this.description.excerpt;
        },
        set: function (value) {
            this.thatGurlIsFreaky();
            this.description.excerpt = value;
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
    Object.defineProperty(Project.prototype, "isUploadable", {
        get: function () {
            return this.selectedReach.isLoaded();
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
        set: function (value) {
            this.thatGurlIsFreaky();
            this.background.textColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Project.prototype.thatGurlIsFreaky = function () {
        this._dirty = true;
    };
    Object.defineProperty(Project.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "background", {
        get: function () {
            return this._background;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=Project.model.js.map