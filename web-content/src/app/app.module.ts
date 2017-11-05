import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {UploadFileService} from "./upload/UploadFile.service";
import {UploadFileComponent} from "./upload/UploadFile.component";
import {BackendAPIService} from "./util/BackendAPI.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent,
        UploadFileComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        UploadFileService,
        BackendAPIService
    ]
})
export class AppModule {
}
