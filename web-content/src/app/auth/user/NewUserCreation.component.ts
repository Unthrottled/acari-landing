/**
 * Created by alex on 9/20/17.
 */
import {Component, NgZone} from "@angular/core";
import "../../common/validation-field.htm";
import {ValidationComponent} from "../../common/Validation.component";
import {Observable} from "rxjs/Observable";
import {NewUserValidationService} from "./NewUserValidation.service";

@Component({
    selector: 'user-name-creation',
    template: require('../../common/validation-field.htm')
})
export class NewUserCreationComponent extends ValidationComponent {

    constructor(private newUserValidationService: NewUserValidationService, private ngZone: NgZone) {
        super(ngZone);
        this.hideContent = true;
        this.placeHolder = "Username"
    }

    validateContent(content: string): Observable<boolean> {
        return this.newUserValidationService.isValid(content);
    }

}
