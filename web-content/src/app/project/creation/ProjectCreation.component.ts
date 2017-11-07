import {Component, EventEmitter, Output} from '@angular/core';
@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent {

    fileChosen(chosenFile: File): void{

    }
}