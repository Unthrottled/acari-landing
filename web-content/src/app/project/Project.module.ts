import {FileChooseComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectManipulationComponent} from "./creation/ProjectManipulation.component";
import {ProjectUploadComponent} from "./upload/ProjectUpload.component";
import {TextEntryComponent} from "./textEntry/TextEntry.component";
import {FormsModule} from "@angular/forms";
import {ProjectViewComponent} from "./view/ProjectView.component";
import {ProjectService} from "./Project.service";
import {SafetyStylePipe} from "../util/SafetyStylePipe";
import {RedirectService} from "../util/RedirectService";
import {LocalReachService} from "./creation/LocalReach.service";
import {RemoteReachService} from "./remote/RemoteReach.service";
import {ProjectListComponent} from "./ProjectList.component";
import {ProjectComponent} from "./Project.Component";
import {LocalProjectService} from "./LocalProjectService";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [FileChooseComponent,
        ProjectManipulationComponent,
        ProjectUploadComponent,
        ProjectViewComponent,
        TextEntryComponent,
        ProjectListComponent,
        ProjectComponent,
        SafetyStylePipe],
    declarations: [
        FileChooseComponent,
        ProjectManipulationComponent,
        ProjectViewComponent,
        ProjectUploadComponent,
        TextEntryComponent,
        SafetyStylePipe,
        ProjectComponent,
        ProjectListComponent
    ],
    bootstrap: [],
    providers: [
        ProjectUploadService,
        ProjectService,
        RedirectService,
        LocalProjectService,
        LocalReachService,
        RemoteReachService
    ],
    schemas: []
})
export class ProjectModule {
}