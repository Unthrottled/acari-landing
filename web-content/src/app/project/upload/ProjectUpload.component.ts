import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ProjectUploadService} from "./ProjectUpload.service";
import {isNullOrUndefined} from "util";
import {Project} from "../Project.model";
@Component({
    selector: 'project-upload',
    template: require('./ProjectUpload.component.htm')
})
export class ProjectUploadComponent {


    @Output()
    private fileSelectedEmitter = new EventEmitter<File>();

    constructor(private uploadFileService: ProjectUploadService) {
    }

    private _selectedFile: File;

    selectFile(event: any): void {
        this.selectedFile = event.target.files.item(0);
        this.fileSelectedEmitter.emit(this.selectedFile);
    }


    get selectedFile(): File {
        return this._selectedFile;
    }

    set selectedFile(value: File) {
        this._selectedFile = value;
    }

    get notUploadable(): Observable<boolean>{
        return Observable.of(isNullOrUndefined(this.selectedFile));
    }

    get project(): Project {
        return new Project();
    }

    upload(): void {
        this.uploadFileService.pushFileToStorage(this.project)
            .subscribe(()=>{}, ()=>{}, ()=> this.selectedFile = null);
    }
}