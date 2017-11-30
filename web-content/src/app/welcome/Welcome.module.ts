import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import {PhantomTypingComponent} from "./PhantomTyping.component";
import {WelcomeComponent} from "./Welcome.component";
import {CaretModule} from "../cursor/Caret.module";

@NgModule({
    imports: [CommonModule, FormsModule, AuthModule, CaretModule],
    exports: [
        PhantomTypingComponent,
        WelcomeComponent
    ],
    declarations: [
        PhantomTypingComponent,
        WelcomeComponent
    ],
    bootstrap: [],
    providers: [],
    schemas: []
})
export class WelcomeModule {
}