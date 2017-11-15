import {Component, Input} from "@angular/core";
import "./Project.component.htm";
import {Project} from "./model/Project.model";
import {Observable} from "rxjs/Observable";
import {RemoteProject} from "./model/RemoteProject.model";
import {LocalProject} from "./model/LocalProject.model";
import {ProjectService} from "./Project.service";
import {ProjectUploadService} from "./upload/ProjectUpload.service";


@Component({
    selector: 'project',
    template: require('./Project.component.htm')
})
export class ProjectComponent {

    constructor(private projectService: ProjectService) {
    }

    private _project: Project;

    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    private _hideEdit: Observable<boolean> = Observable.of(true);

    @Input()
    get hideEdit(): Observable<boolean> {
        return this._hideEdit;
    }

    set hideEdit(value: Observable<boolean>) {
        this._hideEdit = value;
    }

    get cantEdit(): Observable<boolean> {
        return Observable.of(false);
    }

    toggleEdit(): void {
        this._hideEdit = this.hideEdit
            .map(b => !b);
    }

    removeProject(): void {
        this.projectService.removeProject(this._project);
    }

    isRemoteProject(): boolean {
        return this.project.isRemote();
    }

    isLocalProject(): boolean {
        return this.project.isLocal();
    }

    saveAllProjects(): void {
        this.projectService.saveAllProjects();
    }
}
