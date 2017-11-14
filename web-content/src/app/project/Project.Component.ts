import {Component, Input} from "@angular/core";
import "./Project.component.htm";
import {Project} from "./model/Project.model";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "./model/RemoteProject.model";
import {LocalProject} from "./model/LocalProject.model";


@Component({
    selector: 'project',
    template: require('./Project.component.htm')
})
export class ProjectComponent {

    private _project: Project;
    private _hideEdit: Observable<boolean> = Observable.of(true);


    @Input()
    get hideEdit(): Observable<boolean> {
        return this._hideEdit;
    }

    set hideEdit(value: Observable<boolean>) {
        this._hideEdit = value;
    }

    toggleEdit(): void {
        this._hideEdit = this.hideEdit
            .map(b=>!b);
    }

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

    removeProject(): void{

    }

    isRemoteProject(): boolean {
        return this.project instanceof RemoteProject;
    }

    isLocalProject(): boolean {
        return this.project instanceof LocalProject;
    }
}
