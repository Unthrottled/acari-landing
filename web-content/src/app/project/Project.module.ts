import {FileChooseComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectCreationComponent} from "./creation/ProjectCreation.component";

@NgModule({
    imports: [CommonModule],
    exports: [FileChooseComponent, ProjectCreationComponent],
    declarations: [
        FileChooseComponent,
        ProjectCreationComponent
    ],
    bootstrap: [],
    providers: [
        ProjectUploadService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProjectModule {
}