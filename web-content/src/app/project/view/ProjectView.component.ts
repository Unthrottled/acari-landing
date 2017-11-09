import {Component, Input} from '@angular/core';
import {Project} from "../Project.model";
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
    selector: 'project-view',
    template: require('./ProjectView.component.htm')
})
export class ProjectViewComponent {

    constructor(private sanitizer: DomSanitizer) {
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


    get backgroundStyle(): SafeStyle {
        let rgba = this.project.colorOne;
        let rgba2 = this.project.colorTwo;
        return this.sanitizer.bypassSecurityTrustStyle("linear-gradient(to right, " + rgba + ", " + rgba2 + ")");
    }
}