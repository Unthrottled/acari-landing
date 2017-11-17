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
var Project_model_1 = require("./Project.model");
var Description_model_1 = require("./Description.model");
var Location_model_1 = require("./Location.model");
var Background_model_1 = require("./Background.model");
var ProjectRank_model_1 = require("./ProjectRank.model");
var Identifier_model_1 = require("./Identifier.model");
var RemoteReach_model_1 = require("./RemoteReach.model");
var RemoteProject = /** @class */ (function (_super) {
    __extends(RemoteProject, _super);
    function RemoteProject(identifier, description, localReach, background, location, rank) {
        if (identifier === void 0) { identifier = new Identifier_model_1.Identifier(); }
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (localReach === void 0) { localReach = new RemoteReach_model_1.RemoteReach(); }
        if (background === void 0) { background = new Background_model_1.Background(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        var _this = _super.call(this, description, localReach, background, location, rank) || this;
        _this.newImage = false;
        _this._identifier = identifier;
        return _this;
    }
    Object.defineProperty(RemoteProject.prototype, "identifier", {
        get: function () {
            return this._identifier;
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: true,
        configurable: true
    });
    RemoteProject.prototype.isLocal = function () {
        return false;
    };
    RemoteProject.prototype.isRemote = function () {
        return true;
    };
    RemoteProject.prototype.setSelectedReach = function (value) {
        this.newImage = true;
        _super.prototype.setSelectedReach.call(this, value);
    };
    Object.defineProperty(RemoteProject.prototype, "imageChanged", {
        get: function () {
            return this.newImage;
        },
        enumerable: true,
        configurable: true
    });
    return RemoteProject;
}(Project_model_1.Project));
exports.RemoteProject = RemoteProject;
//# sourceMappingURL=RemoteProject.model.js.map