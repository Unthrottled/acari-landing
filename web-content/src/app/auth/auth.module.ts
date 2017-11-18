
import {NgModule} from "@angular/core";
import {LogoutHiderComponent} from "./hideOnLogout.component";
import {LogoutComponent} from "./logout.component";
import {LoginComponent} from "./login.component";
import {AuthService} from "./auth.service";

@NgModule({
    imports: [],
    exports: [
        LogoutHiderComponent,
        LogoutComponent,
        LoginComponent
    ],
    declarations: [
        LogoutHiderComponent,
        LogoutComponent,
        LoginComponent
    ],
    bootstrap: [],
    providers: [
        AuthService
    ],
    schemas: []
})
export class AuthModule {

}