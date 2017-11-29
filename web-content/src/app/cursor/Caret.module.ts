import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import {CaretComponent} from "./Caret.component";

@NgModule({
    imports: [CommonModule, FormsModule, AuthModule],
    exports: [CaretComponent],
    declarations: [CaretComponent],
    bootstrap: [],
    providers: [],
    schemas: []
})
export class CaretModule {
}