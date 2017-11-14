"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Project_service_1 = require("../Project.service");
var LocalReach_service_1 = require("./LocalReach.service");
var LocalProject_factory_1 = require("../LocalProject.factory");
var ProjectManipulation_component_1 = require("./ProjectManipulation.component");
var LocalProjectManipulationComponent = /** @class */ (function (_super) {
    __extends(LocalProjectManipulationComponent, _super);
    function LocalProjectManipulationComponent(projectService, localReachService, localProjectService) {
        return _super.call(this, projectService, localReachService, localProjectService) || this;
    }
    LocalProjectManipulationComponent = __decorate([
        core_1.Component({
            selector: 'local-project-manipulation',
            template: require('./ProjectManipulation.component.htm')
        }),
        __metadata("design:paramtypes", [Project_service_1.ProjectService,
            LocalReach_service_1.LocalReachService,
            LocalProject_factory_1.LocalProjectFactory])
    ], LocalProjectManipulationComponent);
    return LocalProjectManipulationComponent;
}(ProjectManipulation_component_1.ProjectManipulationComponent));
exports.LocalProjectManipulationComponent = LocalProjectManipulationComponent;
//# sourceMappingURL=LocalProjectManipulation.component.js.map