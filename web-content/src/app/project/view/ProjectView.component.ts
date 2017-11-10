import {Component, Input} from '@angular/core';
import {Project} from "../model/Project.model";
import {RedirectService} from "../../util/RedirectService";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'project-view',
    template: require('./ProjectView.component.htm')
})
export class ProjectViewComponent {

    constructor(private redirectService: RedirectService) {
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

    get reachBinary(): Observable<any> {
        //todo: dis will change
        return Observable.of(this.project.reachBlob);
    }


    get backgroundStyle(): string {
        return this.project.backgroundColor;
    }

    get textColor(): string {
        return this.project.descriptionTextColor;
    }

    redirect(): void {
        this.redirectService.redirectToUrl(this.project.url);
    }
}