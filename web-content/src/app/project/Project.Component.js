"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("./Project.component.htm");
var Project_model_1 = require("./model/Project.model");
var Observable_1 = require("rxjs/Observable");
var Project_service_1 = require("./Project.service");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService) {
        this.projectService = projectService;
        this._hideEdit = Observable_1.Observable.of(true);
    }
    Object.defineProperty(ProjectComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            this._project = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "hideEdit", {
        get: function () {
            return this._hideEdit;
        },
        set: function (value) {
            this._hideEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectComponent.prototype, "cantEdit", {
        get: function () {
            return Observable_1.Observable.of(false);
        },
        enumerable: true,
        configurable: true
    });
    ProjectComponent.prototype.toggleEdit = function () {
        this._hideEdit = this.hideEdit
            .map(function (b) { return !b; });
    };
    ProjectComponent.prototype.removeProject = function () {
        this.projectService.removeProject(this._project);
    };
    ProjectComponent.prototype.isRemoteProject = function () {
        return this.project.isRemote();
    };
    ProjectComponent.prototype.isLocalProject = function () {
        return this.project.isLocal();
    };
    ProjectComponent.prototype.saveAllProjects = function () {
        this.projectService.saveAllProjects();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Project_model_1.Project),
        __metadata("design:paramtypes", [Project_model_1.Project])
    ], ProjectComponent.prototype, "project", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Observable_1.Observable),
        __metadata("design:paramtypes", [Observable_1.Observable])
    ], ProjectComponent.prototype, "hideEdit", null);
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'project',
            template: require('./Project.component.htm')
        }),
        __metadata("design:paramtypes", [Project_service_1.ProjectService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=Project.Component.js.map