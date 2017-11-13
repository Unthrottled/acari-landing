import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../model/Project.model";
import {ProjectService} from "../Project.service";
import {isNullOrUndefined} from "util";
import {LocalReachService} from "./LocalReach.service";

@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent implements OnInit {
    @Output()
    private projectChanged = new EventEmitter<Project>();

    constructor(private projectService: ProjectService,
                private localReachService: LocalReachService) {

    }

    private _project: Project = new Project();

    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    get colorOne(): string {
        return this.project.background.colorOne;
    }

    set colorOne(value: string) {
        this._project.background.colorOne = value;
        this.emitProject();
    }


    get colorTwo(): string {
        return this._project.background.colorTwo;
    }

    set colorTwo(value: string) {
        this._project.background.colorTwo = value;
        this.emitProject();
    }

    get descriptionTextColor(): string {
        return this._project.background.textColor;
    }

    set descriptionTextColor(value: string) {
        this._project.background.textColor = value;
        this.emitProject();
    }

    get url(): string {
        return this.project.location.url;
    }

    set url(value: string) {
        this.project.location.url = value;
        this.emitProject();
    }

    get rank(): number {
        return this.project.rank.rank;
    }

    private _oldRank: number;


    set rank(value: number) {
        this.project.rank.rank = value;
        this.emitProject();
    }

    get excerpt(): string {
        return this._project.excerpt;
    }

    set excerpt(value: string) {
        this._project.description.excerpt = value;
        this.emitProject();
    }

    get description(): string {
        return this._project.preachySpeechy;
    }

    set description(value: string) {
        this._project.description.preachySpeechy = value;
        this.emitProject();
    }

    changeRank(): void {
        this.projectService.changePlaces(this.rank, this._oldRank);
    }

    newRank(rank: number){
        this._oldRank = this.rank;
        this.project.projectRank = rank;
    }

    get notUploadable(): Observable<boolean> {
        return this._project.reachBlob
            .defaultIfEmpty(null)
            .map(isNullOrUndefined);
    }

    get backgroundStyle(): string {
        return this._project.background.backgroundStyle;
    }

    get maxProjectCount(): Observable<number> {
        return this.projectService
            .projectCount();
    }

    ngOnInit(): void {

    }

    emitProject(): void {
        this.projectChanged.emit(this.project);
    }


    fileChosen(chosenFile: File): void {
        this._project.selectedReach = this.buildReachBlob(Observable.of(chosenFile));
        this.emitProject();
    }

    fileUploaded(success: boolean) {

    }

    private buildReachBlob(reachFile: Observable<File>) {
        return this.localReachService.createReach(reachFile);
    }
}