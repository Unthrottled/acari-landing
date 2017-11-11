import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ProjectUploadService} from "./ProjectUpload.service";
import {Project} from "../model/Project.model";
import {LocalProject} from "../model/LocalProject.model";

@Component({
    selector: 'project-upload',
    template: require('./ProjectUpload.component.htm')
})
export class ProjectUploadComponent {

    @Output()
    private uploadSuccess = new EventEmitter<boolean>();

    constructor(private uploadFileService: ProjectUploadService) {
    }

    private _notUploadable: Observable<boolean> = Observable.of(true);

    @Input()
    get notUploadable(): Observable<boolean> {
        return this._notUploadable;
    }

    set notUploadable(value: Observable<boolean>) {
        this._notUploadable = value;
    }

    private _project: LocalProject;

    @Input()
    get project(): LocalProject {
        return this._project;
    }

    set project(value: LocalProject) {
        this._project = value;
    }

    upload(): void {
        this.uploadFileService.pushFileToStorage(this._project)
            .subscribe(() => {
                }, () => this.uploadSuccess.emit(false)
                , () => this.uploadSuccess.emit(true));
    }
}