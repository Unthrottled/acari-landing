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
var LocalProject = /** @class */ (function (_super) {
    __extends(LocalProject, _super);
    function LocalProject(description, localReach, background, location, rank) {
        var _this = _super.call(this, description, localReach, background, location, rank) || this;
        _this.localReach = localReach;
        return _this;
    }
    Object.defineProperty(LocalProject.prototype, "reachFile", {
        get: function () {
            return this.localReach.selectedFile;
        },
        enumerable: true,
        configurable: true
    });
    return LocalProject;
}(Project_model_1.Project));
exports.LocalProject = LocalProject;
//# sourceMappingURL=LocalProject.model.js.map