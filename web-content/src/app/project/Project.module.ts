import {UploadFileComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectCreationComponent} from "./creation/ProjectCreation.component";

@NgModule({
    imports: [CommonModule],
    exports: [UploadFileComponent],
    declarations: [
        UploadFileComponent,
        ProjectCreationComponent
    ],
    bootstrap: [],
    providers: [
        ProjectUploadService
    ]
})
export class ProjectModule {
}