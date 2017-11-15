"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectRank_model_1 = require("./ProjectRank.model");
var Background_model_1 = require("./Background.model");
var Description_model_1 = require("./Description.model");
var Location_model_1 = require("./Location.model");
var ExportableReach_model_1 = require("./ExportableReach.model");
var ExportableLocalProject = /** @class */ (function () {
    function ExportableLocalProject(reach, description, background, location, rank) {
        if (reach === void 0) { reach = new ExportableReach_model_1.ExportableReach(); }
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (background === void 0) { background = new Background_model_1.Background(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        this.reach = reach;
        this.description = description;
        this.background = background;
        this.location = location;
        this.rank = rank;
    }
    return ExportableLocalProject;
}());
exports.ExportableLocalProject = ExportableLocalProject;
//# sourceMappingURL=ExportableLocalProject.model.js.map