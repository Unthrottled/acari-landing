import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import {WelcomeBarComponent} from "./WelcomeBar.component";
import {WelcomeComponent} from "./Welcome.component";

@NgModule({
    imports: [CommonModule, FormsModule, AuthModule],
    exports: [
        WelcomeBarComponent,
        WelcomeComponent
    ],
    declarations: [
        WelcomeBarComponent,
        WelcomeComponent
    ],
    bootstrap: [],
    providers: [],
    schemas: []
})
export class WelcomeModule {
}