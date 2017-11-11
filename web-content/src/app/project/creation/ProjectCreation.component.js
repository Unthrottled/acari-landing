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
var Description_model_1 = require("../model/Description.model");
var Project_service_1 = require("../Project.service");
var Background_model_1 = require("../model/Background.model");
var Location_model_1 = require("../model/Location.model");
var util_1 = require("util");
var ProjectRank_model_1 = require("../model/ProjectRank.model");
var LocalReach_model_1 = require("../model/LocalReach.model");
var ProjectCreationComponent = /** @class */ (function () {
    function ProjectCreationComponent(projectService) {
        this.projectService = projectService;
        this._colorOne = '#464646';
        this._colorTwo = '#8d85d6';
        this._descriptionTextColor = '#f5f5f5';
        this._url = 'http://blog.acari.io';
        this._excerpt = 'Lorem ipsum';
        this._description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi libero, viverra vitae mi et, bibendum lobortis ipsum. Aenean vel sapien luctus, varius quam ac, bibendum nisl. Donec placerat turpis a leo auctor, non vestibulum ex tincidunt. Etiam id congue ligula. Donec vel eros tempus, condimentum erat in, faucibus erat. Ut hendrerit elementum justo eu commodo. \n' +
            '\n' +
            '            Suspendisse vestibulum, justo ut ultricies convallis, elit ante lobortis diam, eu ullamcorper tortor libero sit amet nisi. Curabitur vitae magna elementum, dictum lacus vel, volutpat neque. Cras mauris purus, interdum vel arcu quis, mollis aliquam sem. Nunc posuere ipsum non dapibus porta. Pellentesque tristique aliquet nunc eget maximus. \n' +
            '\n' +
            '            Proin faucibus tellus odio, a malesuada felis dictum ut.\n' +
            ' Integer venenatis in arcu id gravida. Nulla dapibus augue sapien, id tincidunt enim varius vel.';
        this._backgroundStyle = this.buildStyle();
    }
    ProjectCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.maxProjectCount.subscribe(function (lowestRank) { return _this.rank = lowestRank; });
    };
    Object.defineProperty(ProjectCreationComponent.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        set: function (value) {
            this._rank = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
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
            return Observable_1.Observable.of(this.reachFile)
                .map(util_1.isNullOrUndefined);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectCreationComponent.prototype, "project", {
        get: function () {
            return new Project_model_1.Project(this.buildDescription(), this.buildReachBlob(), this.buildBackground(), this.buildLocation(), this.buildProjectRank());
        },
        enumerable: true,
        configurable: true
    });
    ProjectCreationComponent.prototype.buildProjectRank = function () {
        return new ProjectRank_model_1.ProjectRank(this.rank);
    };
    ProjectCreationComponent.prototype.buildLocation = function () {
        return new Location_model_1.Location(this.url);
    };
    ProjectCreationComponent.prototype.buildBackground = function () {
        return new Background_model_1.Background(this.backgroundStyle, this.descriptionTextColor);
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
        return new LocalReach_model_1.LocalReach(this.reachFile);
    };
    ProjectCreationComponent.prototype.buildDescription = function () {
        return new Description_model_1.Description(this.excerpt, this.description);
    };
    ProjectCreationComponent.prototype.fileChosen = function (chosenFile) {
        this.reachFile = chosenFile;
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