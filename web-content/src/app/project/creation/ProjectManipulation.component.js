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
var Project_model_1 = require("../model/Project.model");
var Project_service_1 = require("../Project.service");
var LocalReach_service_1 = require("./LocalReach.service");
var ProjectManipulationComponent = /** @class */ (function () {
    function ProjectManipulationComponent(projectService, localReachService) {
        this.projectService = projectService;
        this.localReachService = localReachService;
        this.projectChanged = new core_1.EventEmitter();
        this._project = new Project_model_1.Project();
    }
    Object.defineProperty(ProjectManipulationComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            this._project = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "colorOne", {
        get: function () {
            return this.project.background.colorOne;
        },
        set: function (value) {
            this._project.background.colorOne = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "colorTwo", {
        get: function () {
            return this._project.background.colorTwo;
        },
        set: function (value) {
            this._project.background.colorTwo = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "descriptionTextColor", {
        get: function () {
            return this._project.background.textColor;
        },
        set: function (value) {
            this._project.background.textColor = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "url", {
        get: function () {
            return this.project.location.url;
        },
        set: function (value) {
            this.project.location.url = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "rank", {
        get: function () {
            return this.project.rank.rank;
        },
        set: function (value) {
            this.project.rank.rank = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "excerpt", {
        get: function () {
            return this._project.excerpt;
        },
        set: function (value) {
            this._project.description.excerpt = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "description", {
        get: function () {
            return this._project.preachySpeechy;
        },
        set: function (value) {
            this._project.description.preachySpeechy = value;
            this.emitProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "notUploadable", {
        get: function () {
            return this._project.loadedReach.map(function (b) { return !b; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "backgroundStyle", {
        get: function () {
            return this._project.background.backgroundStyle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectManipulationComponent.prototype, "maxProjectCount", {
        get: function () {
            return this.projectService
                .projectCount();
        },
        enumerable: true,
        configurable: true
    });
    ProjectManipulationComponent.prototype.newRank = function (rank) {
        this._oldRank = this.rank;
        this.project.projectRank = rank;
    };
    ProjectManipulationComponent.prototype.ngOnInit = function () {
    };
    ProjectManipulationComponent.prototype.emitProject = function () {
        this.projectChanged.emit(this.project);
    };
    ProjectManipulationComponent.prototype.fileChosen = function (chosenFile) {
        this._project.selectedReach = this.buildReachBlob(Observable_1.Observable.of(chosenFile));
        this.emitProject();
    };
    ProjectManipulationComponent.prototype.fileUploaded = function (success) {
    };
    ProjectManipulationComponent.prototype.promoteMe = function () {
        this.projectService.promoteProject(this._project);
    };
    ProjectManipulationComponent.prototype.demoteMe = function () {
        this.projectService.demoteProject(this._project);
    };
    ProjectManipulationComponent.prototype.buildReachBlob = function (reachFile) {
        return this.localReachService.createReach(reachFile);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectManipulationComponent.prototype, "projectChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Project_model_1.Project),
        __metadata("design:paramtypes", [Project_model_1.Project])
    ], ProjectManipulationComponent.prototype, "project", null);
    ProjectManipulationComponent = __decorate([
        core_1.Component({
            selector: 'project-creation',
            template: require('./ProjectManipulation.component.htm')
        }),
        __metadata("design:paramtypes", [Project_service_1.ProjectService,
            LocalReach_service_1.LocalReachService])
    ], ProjectManipulationComponent);
    return ProjectManipulationComponent;
}());
exports.ProjectManipulationComponent = ProjectManipulationComponent;
//# sourceMappingURL=ProjectManipulation.component.js.map