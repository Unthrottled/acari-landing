
import {NgModule} from "@angular/core";
import {LogoutHiderComponent} from "./hideOnLogout.component";
import {LogoutComponent} from "./logout.component";

@NgModule({
    imports: [],
    exports: [
        LogoutHiderComponent,
        LogoutComponent
    ],
    declarations: [
        LogoutHiderComponent,
        LogoutComponent
    ],
    bootstrap: [],
    providers: [],
    schemas: []
})
export class AuthModule {

}