
import {NgModule} from "@angular/core";
import {LogoutHiderComponent} from "./hideOnLogout.component";
import {LogoutComponent} from "./logout.component";
import {LoginComponent} from "./login.component";
import {AuthService} from "./auth.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {UserPrincipal} from "./UserPrincipal.model";
import {SafetyStylePipe} from "../util/SafetyStylePipe";

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,],
    exports: [
        LogoutHiderComponent,
        LogoutComponent,
        LoginComponent,
        SafetyStylePipe
    ],
    declarations: [
        LogoutHiderComponent,
        LogoutComponent,
        LoginComponent,
        SafetyStylePipe
    ],
    bootstrap: [],
    providers: [
        AuthService,
        UserPrincipal
    ],
    schemas: []
})
export class AuthModule {

}