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
var RemoteProject_model_1 = require("./model/RemoteProject.model");
var Identifier_model_1 = require("./model/Identifier.model");
var Description_model_1 = require("./model/Description.model");
var RemoteReach_service_1 = require("./remote/RemoteReach.service");
var Background_model_1 = require("./model/Background.model");
var Location_model_1 = require("./model/Location.model");
var ProjectRank_model_1 = require("./model/ProjectRank.model");
var RemoteProjectFactory = /** @class */ (function () {
    function RemoteProjectFactory(remoteReachService) {
        this.remoteReachService = remoteReachService;
    }
    RemoteProjectFactory.prototype.createProject = function (json) {
        var identifier = new Identifier_model_1.Identifier(json.identifier._id);
        var description = new Description_model_1.Description(json.description._excerpt, json.description._preachySpeechy);
        var remoteReach = this.remoteReachService.fetchReach(json.reach._identifier._id);
        var background = new Background_model_1.Background(json.background._colorOne, json.background._colorTwo, json.background._textColor, json.background._hostNameColor, json.background._pwdColor, json.background._titleColor, json.background._hoverColor);
        var location2 = new Location_model_1.Location(json.location._url);
        var projectRank = new ProjectRank_model_1.ProjectRank(json.rank._rank);
        return new RemoteProject_model_1.RemoteProject(identifier, description, remoteReach, background, location2, projectRank);
    };
    RemoteProjectFactory = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [RemoteReach_service_1.RemoteReachService])
    ], RemoteProjectFactory);
    return RemoteProjectFactory;
}());
exports.RemoteProjectFactory = RemoteProjectFactory;
//# sourceMappingURL=RemoteProject.factory.js.map