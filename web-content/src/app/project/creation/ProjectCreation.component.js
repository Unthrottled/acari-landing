"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Project_model_1 = require("../Project.model");
var ProjectCreationComponent = /** @class */ (function () {
    function ProjectCreationComponent() {
        this._excerpt = 'I did a thing';
        this._description = 'The thing is pretty kewl';
    }
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
            return new Project_model_1.Project();
        },
        enumerable: true,
        configurable: true
    });
    ProjectCreationComponent.prototype.fileChosen = function (chosenFile) {
    };
    ProjectCreationComponent.prototype.fileUploaded = function (success) {
    };
    ProjectCreationComponent = __decorate([
        core_1.Component({
            selector: 'project-creation',
            template: require('./ProjectCreation.component.htm')
        })
    ], ProjectCreationComponent);
    return ProjectCreationComponent;
}());
exports.ProjectCreationComponent = ProjectCreationComponent;
//# sourceMappingURL=ProjectCreation.component.js.map