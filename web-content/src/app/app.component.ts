import {Component} from "@angular/core";
import "./app.component.htm";
import {Project} from "./project/model/Project.model";
import {ProjectService} from "./project/Project.service";

@Component({
    selector: 'angular-application',
    template: require('./app.component.htm')
})
export class AppComponent {


    constructor(private projectService: ProjectService) {
    }

    get projectList(): Project[] {
        return this.projectService.projectList;
    }

    addProject(): void {
        this.projectService.addProject();
    }

    private _ableToLogin: boolean = false;


    get ableToLogin(): boolean {
        return this._ableToLogin;
    }

    set ableToLogin(value: boolean) {
        this._ableToLogin = value;
    }

    enableLogin(){
        console.log('butttttttt');
        this.ableToLogin = true;
    }
}
