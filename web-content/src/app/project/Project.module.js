"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileChoose_component_1 = require("./reach/FileChoose.component");
var ProjectUpload_service_1 = require("./upload/ProjectUpload.service");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ProjectUpload_component_1 = require("./upload/ProjectUpload.component");
var TextEntry_component_1 = require("./textEntry/TextEntry.component");
var forms_1 = require("@angular/forms");
var ProjectView_component_1 = require("./view/ProjectView.component");
var Project_service_1 = require("./Project.service");
var SafetyStylePipe_1 = require("../util/SafetyStylePipe");
var RedirectService_1 = require("../util/RedirectService");
var LocalReach_service_1 = require("./creation/LocalReach.service");
var RemoteReach_service_1 = require("./remote/RemoteReach.service");
var ProjectList_component_1 = require("./ProjectList.component");
var Project_Component_1 = require("./Project.Component");
var LocalProjectService_1 = require("./LocalProjectService");
var LocalProjectManipulation_component_1 = require("./creation/LocalProjectManipulation.component");
var RemoteProjectManipulation_component_1 = require("./creation/RemoteProjectManipulation.component");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: [FileChoose_component_1.FileChooseComponent,
                LocalProjectManipulation_component_1.LocalProjectManipulationComponent,
                RemoteProjectManipulation_component_1.RemoteProjectManipulationComponent,
                ProjectUpload_component_1.ProjectUploadComponent,
                ProjectView_component_1.ProjectViewComponent,
                TextEntry_component_1.TextEntryComponent,
                ProjectList_component_1.ProjectListComponent,
                Project_Component_1.ProjectComponent,
                SafetyStylePipe_1.SafetyStylePipe],
            declarations: [
                FileChoose_component_1.FileChooseComponent,
                LocalProjectManipulation_component_1.LocalProjectManipulationComponent,
                RemoteProjectManipulation_component_1.RemoteProjectManipulationComponent,
                ProjectView_component_1.ProjectViewComponent,
                ProjectUpload_component_1.ProjectUploadComponent,
                TextEntry_component_1.TextEntryComponent,
                SafetyStylePipe_1.SafetyStylePipe,
                Project_Component_1.ProjectComponent,
                ProjectList_component_1.ProjectListComponent
            ],
            bootstrap: [],
            providers: [
                ProjectUpload_service_1.ProjectUploadService,
                Project_service_1.ProjectService,
                RedirectService_1.RedirectService,
                LocalProjectService_1.LocalProjectService,
                LocalReach_service_1.LocalReachService,
                RemoteReach_service_1.RemoteReachService
            ],
            schemas: []
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=Project.module.js.map