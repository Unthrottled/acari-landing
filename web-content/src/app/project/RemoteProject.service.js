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
<<<<<<< HEAD
<<<<<<< HEAD
var BackendAPI_service_1 = require("../util/BackendAPI.service");
var RemoteProject_factory_1 = require("./RemoteProject.factory");
var RemoteProjectService = /** @class */ (function () {
    function RemoteProjectService(backendAPIService, remoteProjectFactory) {
        this.backendAPIService = backendAPIService;
        this.remoteProjectFactory = remoteProjectFactory;
=======
var Observable_1 = require("rxjs/Observable");
var RemoteProjectService = /** @class */ (function () {
    function RemoteProjectService() {
>>>>>>> parent of 8f08cb7... less security.... for now
    }
    //todo: impl me
    RemoteProjectService.prototype.fetchProjects = function () {
<<<<<<< HEAD
        var _this = this;
        return this.backendAPIService.fetchAllImages()
            .map(function (json) { return json; })
            .map(function (json) { return json.map(function (projectJson) { return _this.remoteProjectFactory.createProject(projectJson); }); });
    };
    RemoteProjectService.prototype.removeProject = function (projectToRemove) {
        return this.backendAPIService.removeProject(projectToRemove.projectId);
    };
    RemoteProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService,
            RemoteProject_factory_1.RemoteProjectFactory])
=======
=======
var Observable_1 = require("rxjs/Observable");
var RemoteProjectService = /** @class */ (function () {
    function RemoteProjectService() {
    }
    //todo: impl me
    RemoteProjectService.prototype.fetchProjects = function () {
>>>>>>> parent of 8f08cb7... less security.... for now
        return Observable_1.Observable.empty();
    };
    RemoteProjectService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
<<<<<<< HEAD
>>>>>>> parent of 8f08cb7... less security.... for now
=======
>>>>>>> parent of 8f08cb7... less security.... for now
    ], RemoteProjectService);
    return RemoteProjectService;
}());
exports.RemoteProjectService = RemoteProjectService;
//# sourceMappingURL=RemoteProject.service.js.map