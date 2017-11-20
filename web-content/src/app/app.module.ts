import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {BackendAPIService} from "./util/BackendAPI.service";
import {HttpClientModule} from "@angular/common/http";
import {ProjectModule} from "./project/Project.module";
import {WindowRef} from "./util/window";
import {AuthModule} from "./auth/auth.module";
import {CommonModule} from "@angular/common";
import {KonamiDirective} from "./util/konami.directive";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ProjectModule,
        AuthModule,
        CommonModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent,
        KonamiDirective
    ],
    bootstrap: [AppComponent],
    providers: [
        BackendAPIService, WindowRef
    ]
})
export class AppModule {
}
