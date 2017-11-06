import {Component, Input} from '@angular/core';
import {Project} from "./Project.model";

@Component({
    selector: 'acari-project',
    template: require('./Project.component.htm')
})
export class UploadFileComponent {

    private _project: Project;


    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }


    get selectedReach(): Blob {
        return this._project.selectedReach;
    }
}