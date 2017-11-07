import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../Project.model";
@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent {

    private _excerpt: string = 'I did a thing';
    private _description: string = 'The thing is pretty kewl';

    fileChosen(chosenFile: File): void{

    }

    fileUploaded(success: boolean){

    }

    get notUploadable(): Observable<boolean> {
        return Observable.of(true);
    }

    get project(): Project {
        return new Project();
    }


    get excerpt(): string {
        return this._excerpt;
    }

    set excerpt(value: string) {
        this._excerpt = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}