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
var ProjectCreation_component_1 = require("./creation/ProjectCreation.component");
var ProjectUpload_component_1 = require("./upload/ProjectUpload.component");
var TextEntry_component_1 = require("./textEntry/TextEntry.component");
var forms_1 = require("@angular/forms");
var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: [FileChoose_component_1.FileChooseComponent,
                ProjectCreation_component_1.ProjectCreationComponent,
                ProjectUpload_component_1.ProjectUploadComponent,
                TextEntry_component_1.TextEntryComponent],
            declarations: [
                FileChoose_component_1.FileChooseComponent,
                ProjectCreation_component_1.ProjectCreationComponent,
                ProjectUpload_component_1.ProjectUploadComponent,
                TextEntry_component_1.TextEntryComponent
            ],
            bootstrap: [],
            providers: [
                ProjectUpload_service_1.ProjectUploadService
            ],
            schemas: []
        })
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=Project.module.js.map