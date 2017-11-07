import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ProjectUploadService} from "./ProjectUpload.service";
import {Project} from "../Project.model";

@Component({
    selector: 'project-upload',
    template: require('./ProjectUpload.component.htm')
})
export class ProjectUploadComponent {

    @Output()
    private uploadSuccessEmitter = new EventEmitter<boolean>();

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

    private _project: Project;

    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    upload(): void {
        this.uploadFileService.pushFileToStorage(this._project)
            .subscribe(() => {
                }, () => this.uploadSuccessEmitter.emit(false)
                , () => this.uploadSuccessEmitter.emit(true));
    }
}