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
var Project_model_1 = require("../model/Project.model");
var RedirectService_1 = require("../../util/RedirectService");
var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent(redirectService) {
        this.redirectService = redirectService;
    }
    Object.defineProperty(ProjectViewComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (value) {
            this._project = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectViewComponent.prototype, "description", {
        get: function () {
            return this._project.preachySpeechy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectViewComponent.prototype, "excerpt", {
        get: function () {
            return this.project.excerpt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectViewComponent.prototype, "reachBinary", {
        get: function () {
            return this.project.reachBlob;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectViewComponent.prototype, "backgroundStyle", {
        get: function () {
            return this.project.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectViewComponent.prototype, "textColor", {
        get: function () {
            return this.project.descriptionTextColor;
        },
        enumerable: true,
        configurable: true
    });
    ProjectViewComponent.prototype.redirect = function () {
        this.redirectService.redirectToUrl(this.project.url);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Project_model_1.Project),
        __metadata("design:paramtypes", [Project_model_1.Project])
    ], ProjectViewComponent.prototype, "project", null);
    ProjectViewComponent = __decorate([
        core_1.Component({
            selector: 'project-view',
            template: require('./ProjectView.component.htm')
        }),
        __metadata("design:paramtypes", [RedirectService_1.RedirectService])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());
exports.ProjectViewComponent = ProjectViewComponent;
//# sourceMappingURL=ProjectView.component.js.map