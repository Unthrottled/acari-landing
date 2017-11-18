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
var BackendAPI_service_1 = require("../../util/BackendAPI.service");
var Observable_1 = require("rxjs/Observable");
var ExportableReach_model_1 = require("../model/ExportableReach.model");
var Identifier_model_1 = require("../model/Identifier.model");
var RemoteProject_factory_1 = require("../RemoteProject.factory");
var ImageUpload_service_1 = require("./ImageUpload.service");
var ProjectUpdateService = /** @class */ (function () {
    function ProjectUpdateService(backendAPIService, remoteProjectFactory, imageUploadService) {
        this.backendAPIService = backendAPIService;
        this.remoteProjectFactory = remoteProjectFactory;
        this.imageUploadService = imageUploadService;
    }
    ProjectUpdateService.prototype.updateFileInStorage = function (projectToUpload) {
        var _this = this;
        return this.packageReach(projectToUpload)
            .map(function (reachToExport) { return projectToUpload.exportableLocalProject(reachToExport); })
            .flatMap(function (project) { return _this.backendAPIService.updateProject(project)
            .map(function (json) { return _this.remoteProjectFactory.createProject(json); }); });
    };
    ProjectUpdateService.prototype.packageReach = function (projecttoUplead) {
        return this.fetchReach(projecttoUplead)
            .map(function (reachId) { return new ExportableReach_model_1.ExportableReach(new Identifier_model_1.Identifier(reachId)); });
    };
    ProjectUpdateService.prototype.fetchReach = function (projectToUpload) {
        if (projectToUpload.imageChanged) {
            return this.imageUploadService.uploadReach(projectToUpload.reachFile);
        }
        else {
            return Observable_1.Observable.of(projectToUpload.reachId);
        }
    };
    ProjectUpdateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService,
            RemoteProject_factory_1.RemoteProjectFactory,
            ImageUpload_service_1.ImageUploadService])
    ], ProjectUpdateService);
    return ProjectUpdateService;
}());
exports.ProjectUpdateService = ProjectUpdateService;
//# sourceMappingURL=ProjectUpdate.service.js.map