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
        this.ableToLogin = true;
    }

    tempo : string = 'The content below is a rich collection of various projects that capture the principals that drive our passion. The never ending quest of continuous improvement is what drives us, and is what we hope you are looking to find!'.trim()
}
