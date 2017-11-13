import {Component, Input} from "@angular/core";
import "./Project.component.htm";
import {Project} from "./model/Project.model";
import {Observable} from "rxjs/Observable";


@Component({
    selector: 'project',
    template: require('./Project.component.htm')
})
export class ProjectComponent {

    private _project: Project;


    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    get cantEdit(): Observable<boolean>{
        return Observable.of(false);
    }
}
