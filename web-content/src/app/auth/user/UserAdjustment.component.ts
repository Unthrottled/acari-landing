/**
 * Created by alex on 9/15/17.
 */
import {Component} from "@angular/core";
import {Response} from "@angular/http";
import "./userAdjustment.template.htm";
import {Subscriber} from "rxjs/Subscriber";
import {NotificationsService} from "angular2-notifications/dist";
import {BackendService} from "../../util/backend.service";
import {StatusPayload} from "../../pages/models/StatusPayload.model";
import {UserPrincipal} from "../UserPrincipal.model";

@Component({
    selector: 'user-adjustment-guy',
    template: require('./userAdjustment.template.htm')
})
export class UserAdjustmentComponent {
    role: string;
    model: any = {};
    success: boolean = false;

    constructor(private backendService: BackendService,
                private notifService: NotificationsService,
                private userPrinc: UserPrincipal) {

    }

    get currentRole(): String {
        return this.userPrinc.role;
    }

    login() {
        let self = this;
        this.backendService.updateUser(this.role, this.model.password)
            .subscribe(Subscriber.create((response: Response) => {
                if (new StatusPayload(response.json()).succeded) {
                    self.userPrinc.newUserPrincipal(response.json());
                    self.notifService.success("User Permissions Updated!",
                        "Good Job!", {
                            timeOut: 3000,
                            clickToDismiss: true
                        });
                    self.model.password = '';
                    self.success = true;
                } else {
                    self.failure();
                }
            }, (error: any) => {
                this.failure();
            }));
    }

    private failure() {
        this.success = false;
        this.notifService.error("Unable to update user!", "Please try again, or not.", {timeOut: 3000})
    }

}
