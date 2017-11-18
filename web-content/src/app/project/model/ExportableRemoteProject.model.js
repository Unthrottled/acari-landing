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
var ProjectRank_model_1 = require("./ProjectRank.model");
var Background_model_1 = require("./Background.model");
var Description_model_1 = require("./Description.model");
var Location_model_1 = require("./Location.model");
var ExportableReach_model_1 = require("./ExportableReach.model");
var ExportableLocalProject_model_1 = require("./ExportableLocalProject.model");
var Identifier_model_1 = require("./Identifier.model");
var ExportableRemoteProject = /** @class */ (function (_super) {
    __extends(ExportableRemoteProject, _super);
    function ExportableRemoteProject(id, reach, description, background, location, rank) {
        if (id === void 0) { id = new Identifier_model_1.Identifier(); }
        if (reach === void 0) { reach = new ExportableReach_model_1.ExportableReach(); }
        if (description === void 0) { description = new Description_model_1.Description(); }
        if (background === void 0) { background = new Background_model_1.Background(); }
        if (location === void 0) { location = new Location_model_1.Location(); }
        if (rank === void 0) { rank = new ProjectRank_model_1.ProjectRank(); }
        var _this = _super.call(this, reach, description, background, location, rank) || this;
        _this.id = id;
        return _this;
    }
    return ExportableRemoteProject;
}(ExportableLocalProject_model_1.ExportableLocalProject));
exports.ExportableRemoteProject = ExportableRemoteProject;
//# sourceMappingURL=ExportableRemoteProject.model.js.map