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
var Observable_1 = require("rxjs/Observable");
var LocalProject_model_1 = require("./model/LocalProject.model");
var LocalProject_factory_1 = require("./LocalProject.factory");
var RemoteProject_model_1 = require("./model/RemoteProject.model");
var ProjectUpload_service_1 = require("./upload/ProjectUpload.service");
var ProjectUpdate_service_1 = require("./upload/ProjectUpdate.service");
var RemoteProject_service_1 = require("./RemoteProject.service");
var ProjectService = /** @class */ (function () {
    function ProjectService(localProjectFactory, projectUploadService, projectUpdateService, remoteProjectService) {
        var _this = this;
        this.localProjectFactory = localProjectFactory;
        this.projectUploadService = projectUploadService;
        this.projectUpdateService = projectUpdateService;
        this.remoteProjectService = remoteProjectService;
        this._projectList = [];
        this.remoteProjectService.fetchProjects()
            .subscribe(function (remoteProjects) {
            remoteProjects.forEach(function (remoteProject) { return _this.projectList.push(remoteProject); });
        });
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
    ProjectService.prototype.ngOnInit = function () {
    };
    ProjectService.prototype.projectCount = function () {
        return Observable_1.Observable.of(this.projectList.length);
    };
    ProjectService.prototype.addProject = function () {
        this.projectList.forEach(function (project) { return project.projectRank++; });
        this.projectList.unshift(this.createProject());
    };
    ProjectService.prototype.removeProject = function (projectToRemove) {
        if (projectToRemove instanceof RemoteProject_model_1.RemoteProject) {
            //todo: remote project completly
        }
        else if (projectToRemove instanceof LocalProject_model_1.LocalProject) {
            this.removeLocal(projectToRemove);
        }
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
    ProjectService.prototype.saveAllProjects = function () {
        var _this = this;
        this.projectList
            .filter(function (project) { return project.dirtyGurl; })
            .forEach(function (project) {
            if (project.isLocal()) {
                _this.projectUploadService.pushFileToStorage(project)
                    .subscribe(function (newProject) { return _this.hydrateProject(newProject); });
            }
            else if (project.isRemote()) {
                _this.projectUpdateService.updateFileInStorage(project)
                    .subscribe(function (updatedProject) { return _this.hydrateProject(updatedProject); });
            }
        });
        return Observable_1.Observable.of(true);
    };
    ProjectService.prototype.hydrateProject = function (project) {
        this.projectList[project.projectRank - 1] = project;
    };
    ProjectService.prototype.removeLocal = function (projectToRemove) {
        var start = this.removeProjectFromList(projectToRemove);
        //promotions!!
        for (var i = start; i < this.projectList.length; i++)
            this.projectList[i].projectRank--;
    };
    ProjectService.prototype.removeProjectFromList = function (projectToRemove) {
        var start = projectToRemove.projectRank - 1;
        this.projectList.splice(start, 1);
        return start;
    };
    ProjectService.prototype.promoteDemote = function (projectToPromoteIndex, projectToDemoteIndex) {
        this.projectList[projectToPromoteIndex].projectRank--;
        this.projectList[projectToDemoteIndex].projectRank++;
        this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
    };
    ProjectService.prototype.createProject = function () {
        return this.localProjectFactory.createProject();
    };
    ProjectService.prototype.CHANGE_PLACES = function (indexOne, indexTwo) {
        var placeHolder = this.projectList[indexOne];
        this.projectList[indexOne] = this.projectList[indexTwo];
        this.projectList[indexTwo] = placeHolder;
    };
    ProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [LocalProject_factory_1.LocalProjectFactory,
            ProjectUpload_service_1.ProjectUploadService,
            ProjectUpdate_service_1.ProjectUpdateService,
            RemoteProject_service_1.RemoteProjectService])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=Project.service.js.map