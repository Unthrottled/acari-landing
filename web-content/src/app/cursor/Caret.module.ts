import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import {CaretComponent} from "./Caret.component";
import {WindowRef} from "../util/window";

@NgModule({
    imports: [CommonModule, FormsModule, AuthModule],
    exports: [CaretComponent],
    declarations: [CaretComponent],
    bootstrap: [],
    providers: [WindowRef],
    schemas: []
})
export class CaretModule {
}