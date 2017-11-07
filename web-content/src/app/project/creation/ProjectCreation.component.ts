import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../Project.model";
@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent {

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

}