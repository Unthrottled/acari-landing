import {Component} from "@angular/core";
import "./app.component.htm";
import {Project} from "./project/model/Project.model";

@Component({
    selector: 'angular-application',
    template: require('./app.component.htm')
})
export class AppComponent {
    private _projectList: Project[] = [];


    get projectList(): Project[] {
        return this._projectList;
    }

    set projectList(value: Project[]) {
        this._projectList = value;
    }

    addProject(): void {
        this.projectList.unshift(new Project());
    }
}
