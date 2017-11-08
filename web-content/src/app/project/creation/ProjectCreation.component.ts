import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../Project.model";
import {Description} from "../Description.model";
import {ProjectService} from "../Project.service";
import {Reach} from "../Reach.model";
import {Background} from "../Background.model";

@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent {
    private fileReader: FileReader = new FileReader();

    constructor(private projectService: ProjectService) {

    }

    private _reachBlob: any;
    private _reachFile: File;

    get reachBlob(): any {
        return this._reachBlob;
    }

    set reachBlob(value: any) {
        this._reachBlob = value;
    }

    get reachFile(): File {
        return this._reachFile;
    }

    set reachFile(value: File) {
        this._reachFile = value;
    }

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
        return new Project(this.buildDescription(), this.buildReachBlob(), this.buildBackground());
    }

    private buildBackground() {
        return new Background(null, 'purple', 'cyan');
    }

    private buildReachBlob() {
        return new Reach(this.reachBlob);
    }

    private buildDescription() {
        return new Description(this.excerpt, this.description);
    }

    fileChosen(chosenFile: File): void {
        let self = this;
        this.fileReader.onloadend = x => self.reachBlob = self.fileReader.result;
        this.fileReader.readAsDataURL(chosenFile);
    }

    fileUploaded(success: boolean) {

    }

    get maxProjectCount(): Observable<number> {
        return this.projectService
            .projectCount()
            .map(count=>++count);
    }
}