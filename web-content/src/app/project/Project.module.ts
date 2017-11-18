import {FileChooseComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectUploadComponent} from "./upload/ProjectUpload.component";
import {TextEntryComponent} from "./textEntry/TextEntry.component";
import {FormsModule} from "@angular/forms";
import {ProjectViewComponent} from "./view/ProjectView.component";
import {ProjectService} from "./Project.service";
import {SafetyStylePipe} from "../util/SafetyStylePipe";
import {RedirectService} from "../util/RedirectService";
import {LocalReachService} from "./manipulation/LocalReach.service";
import {RemoteReachService} from "./remote/RemoteReach.service";
import {ProjectListComponent} from "./ProjectList.component";
import {ProjectComponent} from "./Project.Component";
import {LocalProjectFactory} from "./LocalProject.factory";
import {LocalProjectManipulationComponent} from "./manipulation/LocalProjectManipulation.component";
import {RemoteProjectManipulationComponent} from "./manipulation/RemoteProjectManipulation.component";
import {ProjectUpdateService} from "./upload/ProjectUpdate.service";
import {RemoteProjectFactory} from "./RemoteProject.factory";
import {RemoteProjectService} from "./RemoteProject.service";
import {ImageUploadService} from "./upload/ImageUpload.service";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    imports: [CommonModule, FormsModule, AuthModule],
    exports: [FileChooseComponent,
        LocalProjectManipulationComponent,
        RemoteProjectManipulationComponent,
        ProjectUploadComponent,
        ProjectViewComponent,
        TextEntryComponent,
        ProjectListComponent,
        ProjectComponent,
        SafetyStylePipe],
    declarations: [
        FileChooseComponent,
        LocalProjectManipulationComponent,
        RemoteProjectManipulationComponent,
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
        LocalProjectFactory,
        RemoteProjectFactory,
        LocalReachService,
        RemoteProjectService,
        RemoteReachService,
        ImageUploadService,
        ProjectUpdateService
    ],
    schemas: []
})
export class ProjectModule {
}