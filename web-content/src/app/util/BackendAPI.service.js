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
var http_1 = require("@angular/common/http");
var RemoteProject_factory_1 = require("../project/RemoteProject.factory");
var BackendAPIService = /** @class */ (function () {
    function BackendAPIService(http, remoteProjectFactory) {
        this.http = http;
        this.remoteProjectFactory = remoteProjectFactory;
    }
    BackendAPIService.prototype.postImage = function (formData) {
        return this.http.post('./api/image/save', formData, {
            responseType: 'text'
        });
    };
    BackendAPIService.prototype.fetchImage = function (_id) {
        return this.http.get('./api/image/get' + _id, {
            responseType: 'blob'
        });
    };
    BackendAPIService.prototype.fetchAllImages = function () {
        var _this = this;
        return this.http.get('./api/projects', {
            responseType: 'json'
        }).map(function (json) { return json; })
            .map(function (json) { return json.map(function (projectJson) { return _this.remoteProjectFactory.createProject(projectJson); }); });
    };
    BackendAPIService.prototype.postProject = function (exportableLocalProject) {
        var _this = this;
        return this.http.post('./api/project/create', exportableLocalProject, {
            responseType: 'json'
        }).map(function (json) { return _this.remoteProjectFactory.createProject(json); });
    };
    BackendAPIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            RemoteProject_factory_1.RemoteProjectFactory])
    ], BackendAPIService);
    return BackendAPIService;
}());
exports.BackendAPIService = BackendAPIService;
//# sourceMappingURL=BackendAPI.service.js.map