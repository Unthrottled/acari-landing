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
var Background_model_1 = require("../model/Background.model");
var util_1 = require("util");
var LocalReach_service_1 = require("./LocalReach.service");
var ProjectCreationComponent = /** @class */ (function () {
    function ProjectCreationComponent(projectService, localReachService) {
        this.projectService = projectService;
        this.localReachService = localReachService;
        this.projectChanged = new core_1.EventEmitter();
        this._project = this.buildProject();
        this._reachFile = Observable_1.Observable.empty();
        this._colorOne = '#464646';
        this._colorTwo = '#8d85d6';
        this._descriptionTextColor = '#f5f5f5';
        this._background = this.buildBackground();
        this._backgroundStyle = this.buildStyle();
    }
    Object.defineProperty(ProjectCreationComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "reachFile", {
        get: function () {
            return this._reachFile;
        },
        set: function (value) {
            this._reachFile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "colorOne", {
        get: function () {
            return this._colorOne;
        },
        set: function (value) {
            this._colorOne = value;
            this.rebuildStyle();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "colorTwo", {
        get: function () {
            return this._colorTwo;
        },
        set: function (value) {
            this._colorTwo = value;
            this.rebuildStyle();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "descriptionTextColor", {
        get: function () {
            return this._descriptionTextColor;
        },
        set: function (value) {
            this._descriptionTextColor = value;
            this.background = this.buildBackground();
            this.rebuildProject();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "url", {
        get: function () {
            return this.project.location.url;
        },
        set: function (value) {
            this.project.location.url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "rank", {
        get: function () {
            return this.project.rank.rank;
        },
        set: function (value) {
            this.project.rank.rank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "projectRank", {
        get: function () {
            return this._projectRank;
        },
        set: function (value) {
            this._projectRank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "background", {
        get: function () {
            return this._background;
        },
        set: function (value) {
            this._background = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "excerpt", {
        get: function () {
            return this._project.excerpt;
        },
        set: function (value) {
            this._project.description.excerpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "projectDescription", {
        get: function () {
            return this._projectDescription;
        },
        set: function (value) {
            this._projectDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "description", {
        get: function () {
            return this._project.preachySpeechy;
        },
        set: function (value) {
            this._project.description.preachySpeechy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "notUploadable", {
        get: function () {
            return this.reachFile
                .defaultIfEmpty(null)
                .map(util_1.isNullOrUndefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "backgroundStyle", {
        get: function () {
            return this._backgroundStyle;
        },
        set: function (value) {
            this._backgroundStyle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "maxProjectCount", {
        get: function () {
            return this.projectService
                .projectCount()
                .map(function (count) { return ++count; });
        },
        enumerable: true,
        configurable: true
    });
    ProjectCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxProjectCount.subscribe(function (lowestRank) { return _this.rank = lowestRank; });
        this.rebuildProject();
    };
    ProjectCreationComponent.prototype.rebuildProject = function () {
        this._project = this.buildProject();
        this.projectChanged.emit(this.project);
    };
    ProjectCreationComponent.prototype.buildProject = function () {
        return new Project_model_1.Project(this._projectDescription, this._reach, this._background, this._location, this._projectRank);
    };
    ProjectCreationComponent.prototype.rebuildStyle = function () {
        this.backgroundStyle = this.buildStyle();
        this.background = this.buildBackground();
        this.rebuildProject();
    };
    ProjectCreationComponent.prototype.buildStyle = function () {
        var rgba = this.colorOne;
        var rgba2 = this.colorTwo;
        return "linear-gradient(to right, " + rgba + ", " + rgba2 + ")";
    };
    ProjectCreationComponent.prototype.fileChosen = function (chosenFile) {
        this.reachFile = Observable_1.Observable.of(chosenFile);
        this._reach = this.buildReachBlob();
        this.rebuildProject();
    };
    ProjectCreationComponent.prototype.fileUploaded = function (success) {
    };
    ProjectCreationComponent.prototype.buildBackground = function () {
        return new Background_model_1.Background(this.backgroundStyle, this.descriptionTextColor);
    };
    ProjectCreationComponent.prototype.buildReachBlob = function () {
        return this.localReachService.createReach(this.reachFile);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ProjectCreationComponent.prototype, "projectChanged", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Project_model_1.Project),
        __metadata("design:paramtypes", [])
    ], ProjectCreationComponent.prototype, "project", null);
    ProjectCreationComponent = __decorate([
        core_1.Component({
            selector: 'project-creation',
            template: require('./ProjectCreation.component.htm')
        }),
        __metadata("design:paramtypes", [Project_service_1.ProjectService,
            LocalReach_service_1.LocalReachService])
    ], ProjectCreationComponent);
    return ProjectCreationComponent;
}());
exports.ProjectCreationComponent = ProjectCreationComponent;
//# sourceMappingURL=ProjectCreation.component.js.map