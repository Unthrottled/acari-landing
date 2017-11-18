/**
 * Created by alex on 9/15/17.
 */
import {Component, OnInit} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {User} from "./user/user.model";
import "./login.template.htm";
import {Subscriber} from "rxjs/Subscriber";
import {UserPrincipal} from "./UserPrincipal.model";
import {NotificationsService} from "angular2-notifications/dist";

@Component({
    selector: 'login-form-guy',
    template: require('./login.template.htm')
})
export class LoginComponent implements OnInit {
    message: string;
    model: any = {};

    constructor(public authService: AuthService,
                public router: Router,
                private notifService: NotificationsService) {

    }

    getUser(): User {
        return new User(this.model.username, this.model.password);
    }

    login() {
        let self = this;
        this.authService.login(this.getUser())
            .subscribe(Subscriber.create((succeded: boolean) => {
                if (succeded) {
                    // Set our navigation extras object
                    // that passes on our global query params and fragment
                    let navigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };

                    this.router.navigate(['/'], navigationExtras);
                }
            }, (e) => this.notifService.error("Unable Login!", "Invalid User Credentials", {
                timeOut: 6000,
                clickToDismiss: true
            })));
    }

    ngOnInit(): void {
        this.authService.logout();
    }

    logout() {
        this.authService.logout();
    }
}
