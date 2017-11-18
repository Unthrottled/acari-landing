/**
 * Created by alex on 9/15/17.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import "./login.template.htm";
import {Subscriber} from "rxjs/Subscriber";
import {User} from "./user/user.model";

@Component({
    selector: 'login-form-guy',
    template: require('./login.template.htm')
})
export class LoginComponent implements OnInit {
    message: string;
    model: any = {};

    constructor(public authService: AuthService,
                public router: Router) {

    }

    getUser(): User {
        return new User(this.model.username, this.model.password);
    }

    login() {
        let self = this;
        this.authService.login(this.getUser())
            .subscribe(Subscriber.create((succeded: boolean) => {
                if (succeded) {

                }
            }, (e) => {}));
    }

    ngOnInit(): void {
        this.authService.logout();
    }

    logout() {
        this.authService.logout();
    }
}
