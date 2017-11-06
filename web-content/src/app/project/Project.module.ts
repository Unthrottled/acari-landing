import {UploadFileComponent} from "./reach/UploadFile.component";
import {UploadFileService} from "./reach/UploadFile.service";
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
        UploadFileService
    ]
})
export class ProjectModule {
}