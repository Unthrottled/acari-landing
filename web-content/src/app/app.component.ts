import {Component} from "@angular/core";
import "./app.component.htm";
import {Project} from "./project/model/Project.model";
import {ProjectService} from "./project/Project.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'angular-application',
    template: require('./app.component.htm')
})
export class AppComponent {
    versionNumber: string = "v.1.1.2";


    constructor(private projectService: ProjectService) {
    }

    get projectList(): Project[] {
        return this.projectService.projectList;
    }

    get hasLoaded(): Observable<boolean> {
        return this.projectService.hasLoaded;
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

}
