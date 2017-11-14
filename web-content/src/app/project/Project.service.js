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
var BackendAPI_service_1 = require("../util/BackendAPI.service");
var Observable_1 = require("rxjs/Observable");
var LocalProjectService_1 = require("./LocalProjectService");
var ProjectService = /** @class */ (function () {
    function ProjectService(backendAPIService, localProjectService) {
        this.backendAPIService = backendAPIService;
        this.localProjectService = localProjectService;
        this._projectList = [];
    }
    Object.defineProperty(ProjectService.prototype, "projectList", {
        get: function () {
            return this._projectList;
        },
        set: function (value) {
            this._projectList = value;
        },
        enumerable: true,
        configurable: true
    });
    ProjectService.prototype.projectCount = function () {
        return Observable_1.Observable.of(this.projectList.length);
    };
    ProjectService.prototype.addProject = function () {
        this.projectList.forEach(function (project) { return project.projectRank++; });
        this.projectList.unshift(this.createProject());
    };
    ProjectService.prototype.promoteProject = function (projectToPromote) {
        var projectToPromoteIndex = projectToPromote.projectRank - 1; //project passed in
        if (projectToPromoteIndex > 0) {
            var projectToDemoteIndex = projectToPromoteIndex - 1;
            this.promoteDemote(projectToPromoteIndex, projectToDemoteIndex);
        }
    };
    ProjectService.prototype.demoteProject = function (projectToDemote) {
        var projectToPromoteIndex = projectToDemote.projectRank;
        if (projectToPromoteIndex < this.projectList.length) {
            var projectToDemoteIndex = projectToPromoteIndex - 1; //project passed in
            this.projectList[projectToPromoteIndex].projectRank--;
            this.projectList[projectToDemoteIndex].projectRank++;
            this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
        }
    };
    ProjectService.prototype.promoteDemote = function (projectToPromoteIndex, projectToDemoteIndex) {
        this.projectList[projectToPromoteIndex].projectRank--;
        this.projectList[projectToDemoteIndex].projectRank++;
        this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
    };
    ProjectService.prototype.createProject = function () {
        return this.localProjectService.createProject();
    };
    ProjectService.prototype.CHANGE_PLACES = function (indexOne, indexTwo) {
        var placeHolder = this.projectList[indexOne];
        this.projectList[indexOne] = this.projectList[indexTwo];
        this.projectList[indexTwo] = placeHolder;
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService,
            LocalProjectService_1.LocalProjectService])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=Project.service.js.map