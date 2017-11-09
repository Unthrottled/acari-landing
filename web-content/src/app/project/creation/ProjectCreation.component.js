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
var Project_model_1 = require("../Project.model");
var Description_model_1 = require("../Description.model");
var Project_service_1 = require("../Project.service");
var Reach_model_1 = require("../Reach.model");
var Background_model_1 = require("../Background.model");
var ProjectCreationComponent = /** @class */ (function () {
    function ProjectCreationComponent(projectService) {
        this.projectService = projectService;
        this.fileReader = new FileReader();
        this._colorOne = 'blue';
        this._colorTwo = 'orange';
        this._excerpt = 'I did a thing';
        this._description = 'The thing is pretty kewl';
        this._backgroundStyle = this.buildStyle();
    }
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
    Object.defineProperty(ProjectCreationComponent.prototype, "reachBlob", {
        get: function () {
            return this._reachBlob;
        },
        set: function (value) {
            this._reachBlob = value;
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
    Object.defineProperty(ProjectCreationComponent.prototype, "excerpt", {
        get: function () {
            return this._excerpt;
        },
        set: function (value) {
            this._excerpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "notUploadable", {
        get: function () {
            return Observable_1.Observable.of(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "project", {
        get: function () {
            return new Project_model_1.Project(this.buildDescription(), this.buildReachBlob(), this.buildBackground());
        },
        enumerable: true,
        configurable: true
    });
    ProjectCreationComponent.prototype.buildBackground = function () {
        return new Background_model_1.Background(null, this.backgroundStyle);
    };
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
    ProjectCreationComponent.prototype.rebuildStyle = function () {
        this.backgroundStyle = this.buildStyle();
    };
    ProjectCreationComponent.prototype.buildStyle = function () {
        var rgba = this.colorOne;
        var rgba2 = this.colorTwo;
        return "linear-gradient(to right, " + rgba + ", " + rgba2 + ")";
    };
    ProjectCreationComponent.prototype.buildReachBlob = function () {
        return new Reach_model_1.Reach(this.reachBlob);
    };
    ProjectCreationComponent.prototype.buildDescription = function () {
        return new Description_model_1.Description(this.excerpt, this.description);
    };
    ProjectCreationComponent.prototype.fileChosen = function (chosenFile) {
        var self = this;
        this.fileReader.onloadend = function (x) { return self.reachBlob = self.fileReader.result; };
        this.fileReader.readAsDataURL(chosenFile);
    };
    ProjectCreationComponent.prototype.fileUploaded = function (success) {
    };
    Object.defineProperty(ProjectCreationComponent.prototype, "maxProjectCount", {
        get: function () {
            return this.projectService
                .projectCount()
                .map(function (count) { return ++count; });
        },
        enumerable: true,
        configurable: true
    });
    ProjectCreationComponent = __decorate([
        core_1.Component({
            selector: 'project-creation',
            template: require('./ProjectCreation.component.htm')
        }),
        __metadata("design:paramtypes", [Project_service_1.ProjectService])
    ], ProjectCreationComponent);
    return ProjectCreationComponent;
}());
exports.ProjectCreationComponent = ProjectCreationComponent;
//# sourceMappingURL=ProjectCreation.component.js.map