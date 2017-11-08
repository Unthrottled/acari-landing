import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../Project.model";
import {Description} from "../Description.model";

@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent {

    private _excerpt: string = 'I did a thing';

    get excerpt(): string {
        return this._excerpt;
    }

    set excerpt(value: string) {
        this._excerpt = value;
    }

    private _description: string = 'The thing is pretty kewl';

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get notUploadable(): Observable<boolean> {
        return Observable.of(true);
    }

    get project(): Project {
        return new Project(this.buildDescription());
    }

    private buildDescription() {
        return new Description(this.excerpt, this.description);
    }

    fileChosen(chosenFile: File): void {

    }

    fileUploaded(success: boolean) {

    }
}