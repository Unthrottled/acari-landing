import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../model/Project.model";
import {Description} from "../model/Description.model";
import {ProjectService} from "../Project.service";
import {Background} from "../model/Background.model";
import {Location} from '../model/Location.model';
import {isNullOrUndefined} from "util";
import {ProjectRank} from "../model/ProjectRank.model";
import {LocalReachService} from "./LocalReach.service";
import {ReachInterface} from "../model/ReachInterface";

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

    private _reachFile: Observable<File> = Observable.empty();

    get reachFile(): Observable<File> {
        return this._reachFile;
    }

    set reachFile(value: Observable<File>) {
        this._reachFile = value;
    }

    get colorOne(): string {
        return this.project.background.colorOne;
    }

    set colorOne(value: string) {
        this._project.background.colorOne = value;
    }


    get colorTwo(): string {
        return this._project.background.colorTwo;
    }

    set colorTwo(value: string) {
        this._project.background.colorTwo = value;
    }

    get descriptionTextColor(): string {
        return this._project.background.textColor;
    }

    set descriptionTextColor(value: string) {
        this._project.background.textColor = value;
    }

    get url(): string {
        return this.project.location.url;
    }

    set url(value: string) {
        this.project.location.url = value;
    }

    get rank(): number {
        return this.project.rank.rank;
    }

    set rank(value: number) {
        this.project.rank.rank = value;
    }

    private _location: Location;

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    private _projectRank: ProjectRank;

    get projectRank(): ProjectRank {
        return this._projectRank;
    }

    set projectRank(value: ProjectRank) {
        this._projectRank = value;
    }

    private _localReach: ReachInterface;

    get localReach(): ReachInterface {
        return this._localReach;
    }

    set localReach(value: ReachInterface) {
        this._localReach = value;
    }

    get excerpt(): string {
        return this._project.excerpt;
    }

    set excerpt(value: string) {
        this._project.description.excerpt = value;
    }

    private _projectDescription: Description;


    get projectDescription(): Description {
        return this._projectDescription;
    }

    set projectDescription(value: Description) {
        this._projectDescription = value;
    }

    get description(): string {
        return this._project.preachySpeechy;
    }

    set description(value: string) {
        this._project.description.preachySpeechy = value;
    }

    get notUploadable(): Observable<boolean> {
        return this.reachFile
            .defaultIfEmpty(null)
            .map(isNullOrUndefined);
    }

    get backgroundStyle(): string {
        return this._project.background.backgroundStyle;
    }

    get maxProjectCount(): Observable<number> {
        return this.projectService
            .projectCount()
            .map(count => ++count);
    }

    ngOnInit(): void {
        this.maxProjectCount.subscribe(lowestRank => this.rank = lowestRank);
        this.rebuildProject();
    }

    rebuildProject(): void {
        this._project = this.buildProject();
        this.projectChanged.emit(this.project);
    }

    buildProject(): Project {
        return new Project(this._projectDescription,
            this.localReach,
            undefined,
            this._location,
            this._projectRank)

    }

    fileChosen(chosenFile: File): void {
        this.reachFile = Observable.of(chosenFile);
        this.localReach = this.buildReachBlob();
        this.rebuildProject();
    }

    fileUploaded(success: boolean) {

    }

    private buildReachBlob() {
        return this.localReachService.createReach(this.reachFile);
    }
}