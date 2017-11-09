import {FileChooseComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectCreationComponent} from "./creation/ProjectCreation.component";
import {ProjectUploadComponent} from "./upload/ProjectUpload.component";
import {TextEntryComponent} from "./textEntry/TextEntry.component";
import {FormsModule} from "@angular/forms";
import {ProjectViewComponent} from "./view/ProjectView.component";
import {ProjectService} from "./Project.service";
import {SafetyStylePipe} from "../util/SafetyStylePipe";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [FileChooseComponent,
        ProjectCreationComponent,
        ProjectUploadComponent,
        ProjectViewComponent,
        TextEntryComponent],
    declarations: [
        FileChooseComponent,
        ProjectCreationComponent,
        ProjectViewComponent,
        ProjectUploadComponent,
        TextEntryComponent
    ],
    bootstrap: [],
    pipe: [SafetyStylePipe],
    providers: [
        ProjectUploadService,
        ProjectService
    ],
    schemas: []
})
export class ProjectModule {
}