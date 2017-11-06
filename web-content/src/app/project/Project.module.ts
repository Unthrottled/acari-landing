import {UploadFileComponent} from "./reach/FileChoose.component";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [CommonModule],
    exports: [UploadFileComponent],
    declarations: [
        UploadFileComponent
    ],
    bootstrap: [],
    providers: [
        ProjectUploadService
    ]
})
export class ProjectModule {
}