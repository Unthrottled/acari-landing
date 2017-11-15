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
var LocalReach_model_1 = require("./LocalReach.model");
var Description_model_1 = require("./Description.model");
var Background_model_1 = require("./Background.model");
var ProjectRank_model_1 = require("./ProjectRank.model");
var Location_model_1 = require("./Location.model");
var Observable_1 = require("rxjs/Observable");
var LocalProject = /** @class */ (function (_super) {
    __extends(LocalProject, _super);
    function LocalProject(description, localReach, background, location, rank) {
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (localReach === void 0) { localReach = new LocalReach_model_1.LocalReach(); }
        if (background === void 0) { background = new Background_model_1.Background(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        return _super.call(this, description, localReach, background, location, rank) || this;
    }
    Object.defineProperty(LocalProject.prototype, "reachFile", {
        /**
         * dis feels janky.
         * @returns {Observable<File>}
         */
        get: function () {
            if (this.selectedReach instanceof LocalReach_model_1.LocalReach) {
                return this.selectedReach.selectedFile;
            }
            else {
                return Observable_1.Observable.empty();
            }
        },
        enumerable: true,
        configurable: true
    });
    LocalProject.prototype.isLocal = function () {
        return true;
    };
    LocalProject.prototype.isRemote = function () {
        return false;
    };
    return LocalProject;
}(Project_model_1.Project));
exports.LocalProject = LocalProject;
//# sourceMappingURL=LocalProject.model.js.map