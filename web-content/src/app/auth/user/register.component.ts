/**
 * Created by alex on 9/15/17.
 */
import {Component, OnInit} from "@angular/core";
import {NavigationExtras, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {User} from "./user.model";
import "./register.template.htm";
import {Subscriber} from "rxjs/Subscriber";
import {NewUser} from "./NewUser.model";
import {NotificationsService} from "angular2-notifications/dist";

@Component({
    selector: 'register-form-guy',
    template: require('./register.template.htm')
})
export class RegisterComponent implements OnInit {
    message: string;
    model: any = {};
    role: string = 'reader';

    constructor(public authService: AuthService, public router: Router, private notifService: NotificationsService) {

    }

    private _validName: boolean;

    get validName(): boolean {
        return this._validName;
    }

    set validName(value: boolean) {
        this._validName = value;
    }

    getUser(): User {
        return new User(this.model.username, this.model.password);
    }

    getNewUser(): NewUser {
        return new NewUser(this.model.username, this.model.password, this.role);
    }

    userNameValidationChange(delta: boolean): void {
        this.validName = delta;
    }

    login() {
        let self = this;
        if (this.validName) {
            this.authService.createPrincipal(this.getNewUser())
                .subscribe(Subscriber.create((succeded: boolean) => {
                    if (succeded) {
                        self.authService.login(self.getUser())
                            .subscribe(Subscriber.create((succeded: boolean) => {
                                if (succeded) {
                                    // Set our navigation extras object
                                    // that passes on our global query params and fragment
                                    let navigationExtras: NavigationExtras = {
                                        queryParamsHandling: 'preserve',
                                        preserveFragment: true
                                    };

                                    this.router.navigate(['/'], navigationExtras);
                                } else {
                                    this.failure();
                                }
                            }, (e) => this.failure()));
                    } else {
                        this.failure();
                    }
                }, (error: any) => {
                    this.failure();
                }));
        }
    }

    ngOnInit(): void {
        this.authService.logout();
    }

    logout() {
        this.authService.logout();
    }

    setUsername(newUsername: string): void {
        this.model.username = newUsername;
    }

    private failure() {
        this.notifService.error("Unable to create user!", "Please try another username.", {timeOut: 3000})
    }
}
