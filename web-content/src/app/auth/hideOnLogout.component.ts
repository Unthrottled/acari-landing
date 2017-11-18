/**
 * Created by alex on 9/15/17.
 */
import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import "./logoutHider.template.htm";

@Component({
    selector: 'logout-hider',
    template: require('./logoutHider.template.htm')
})
export class LogoutHiderComponent {
    constructor(public authService: AuthService) {

    }

    get hideLogout(): boolean {
        return !this.authService.isLoggedIn;
    }
}
