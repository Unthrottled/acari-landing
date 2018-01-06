/**
 * Created by alex on 9/15/17.
 */
import {Component, Input, OnInit} from "@angular/core";
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

    private _viewable: boolean = true;


    @Input()
    get viewable(): boolean {
        return this._viewable;
    }

    set viewable(value: boolean) {
        this._viewable = value;
    }

    constructor(public authService: AuthService) {

    }

    getUser(): User {
        return new User(this.model.username, this.model.password);
    }

    login() {
        let self = this;
        this.authService.login(this.getUser())
            .subscribe(Subscriber.create((succeded: boolean) => {
                if (succeded) {
                    this.viewable = false;
                }
            }, (e) => {}));
    }

    ngOnInit(): void {
        this.authService.logout();
    }

    logout() {
        this.authService.logout();
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn;
    }
}
