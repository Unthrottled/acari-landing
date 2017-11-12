import {Component, Input} from "@angular/core";
import "./ProjectList.component.htm";
import {Project} from "./model/Project.model";

@Component({
    selector: 'project-list',
    template: require('./ProjectList.component.htm')
})
export class ProjectListComponent {

    private _projectList: Project[] = [];


    @Input()
    get projectList(): Project[] {
        return this._projectList;
    }

    set projectList(value: Project[]) {
        this._projectList = value;
    }
}
