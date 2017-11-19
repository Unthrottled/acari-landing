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
var Observable_1 = require("rxjs/Observable");
var BackendAPIService = /** @class */ (function () {
    function BackendAPIService(http) {
        this.http = http;
    }
    BackendAPIService.prototype.postImage = function (formData) {
        return this.http.post('./api/image/save', formData, {
            responseType: 'text'
        });
    };
    BackendAPIService.prototype.fetchImage = function (_id) {
        return this.http.get('./api/image/get/' + _id, {
            responseType: 'arraybuffer'
        });
    };
<<<<<<< HEAD
<<<<<<< HEAD
    BackendAPIService.prototype.fetchAllImages = function () {
        return this.http.get('./api/projects', {
            responseType: 'json'
        });
    };
    BackendAPIService.prototype.removeProject = function (projectId) {
        return this.http.delete('./api/project/delete/' + projectId, {
            responseType: 'text'
        }).map(function (response) { return (response == 'true'); });
    };
=======
>>>>>>> parent of 8f08cb7... less security.... for now
=======
>>>>>>> parent of 8f08cb7... less security.... for now
    BackendAPIService.prototype.postProject = function (exportableLocalProject) {
        return this.http.post('./api/project/create', exportableLocalProject, {
            responseType: 'json'
        });
    };
    BackendAPIService.prototype.updateProject = function (exportableLocalProject) {
        return this.http.post('./api/project/update', exportableLocalProject, {
            responseType: 'json'
        });
    };
    BackendAPIService.prototype.logoutUser = function () {
        return Observable_1.Observable.of(false);
    };
    BackendAPIService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BackendAPIService);
    return BackendAPIService;
}());
exports.BackendAPIService = BackendAPIService;
//# sourceMappingURL=BackendAPI.service.js.map