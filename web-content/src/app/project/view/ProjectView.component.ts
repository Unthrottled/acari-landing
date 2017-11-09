import {Component, Input} from '@angular/core';
import {Project} from "../Project.model";

@Component({
    selector: 'project-view',
    template: require('./ProjectView.component.htm')
})
export class ProjectViewComponent {

    constructor() {
    }

    private _project: Project;

    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    get description(): string {
        return this._project.preachySpeechy;
    }


    get excerpt(): string {
        return this.project.excerpt;
    }

    get reachBinary(): any {
        return this.project.reachBlob;
    }


    get backgroundStyle(): string {
        return this.project.backgroundColor;
    }

    get textColor(): string {
        return this.project.descriptionTextColor;
    }
}