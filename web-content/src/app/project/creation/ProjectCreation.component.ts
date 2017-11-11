import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Project} from "../model/Project.model";
import {Description} from "../model/Description.model";
import {ProjectService} from "../Project.service";
import {Background} from "../model/Background.model";
import {Location} from '../model/Location.model';
import {isNullOrUndefined} from "util";
import {ProjectRank} from "../model/ProjectRank.model";
import {LocalReach} from "../model/LocalReach.model";
import {LocalReachService} from "./LocalReach.service";

@Component({
    selector: 'project-creation',
    template: require('./ProjectCreation.component.htm')
})
export class ProjectCreationComponent implements OnInit {
    ngOnInit(): void {
        this.maxProjectCount.subscribe(lowestRank=> this.rank=lowestRank);
        this.rebuildProject();
    }

    rebuildProject(): void{
        this._project = new Project(this.buildDescription(),
            this.buildReachBlob(),
            this.buildBackground(),
            this.buildLocation(),
            this.buildProjectRank())
    }

    constructor(private projectService: ProjectService,
                private localReachService: LocalReachService) {

    }

    private _project: Project;
    private _reachFile: Observable<File> = Observable.empty();
    private _colorOne: string = '#464646';
    private _colorTwo: string = '#8d85d6';
    private _descriptionTextColor: string = '#f5f5f5';
    private _url: string = 'http://blog.acari.io';
    private _rank: number;




    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get descriptionTextColor(): string {
        return this._descriptionTextColor;
    }

    set descriptionTextColor(value: string) {
        this._descriptionTextColor = value;
    }

    get colorOne(): string {
        return this._colorOne;
    }

    set colorOne(value: string) {
        this._colorOne = value;
        this.rebuildStyle();
    }

    get colorTwo(): string {
        return this._colorTwo;
    }

    set colorTwo(value: string) {
        this._colorTwo = value;
        this.rebuildStyle();
    }

    get reachFile(): Observable<File> {
        return this._reachFile;
    }

    set reachFile(value: Observable<File>) {
        this._reachFile = value;
    }

    private _excerpt: string = 'Lorem ipsum';

    get excerpt(): string {
        return this._excerpt;
    }

    set excerpt(value: string) {
        this._excerpt = value;
    }

    private _description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi libero, viverra vitae mi et, bibendum lobortis ipsum. Aenean vel sapien luctus, varius quam ac, bibendum nisl. Donec placerat turpis a leo auctor, non vestibulum ex tincidunt. Etiam id congue ligula. Donec vel eros tempus, condimentum erat in, faucibus erat. Ut hendrerit elementum justo eu commodo. \n' +
        '\n' +
        '            Suspendisse vestibulum, justo ut ultricies convallis, elit ante lobortis diam, eu ullamcorper tortor libero sit amet nisi. Curabitur vitae magna elementum, dictum lacus vel, volutpat neque. Cras mauris purus, interdum vel arcu quis, mollis aliquam sem. Nunc posuere ipsum non dapibus porta. Pellentesque tristique aliquet nunc eget maximus. \n' +
        '\n' +
        '            Proin faucibus tellus odio, a malesuada felis dictum ut.\n' +
        ' Integer venenatis in arcu id gravida. Nulla dapibus augue sapien, id tincidunt enim varius vel.';

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get notUploadable(): Observable<boolean> {
        return this.reachFile
            .defaultIfEmpty(null)
            .map(isNullOrUndefined);
    }

    get project(): Project {
        return this._project;
    }

    private buildProjectRank() {
        return new ProjectRank(this.rank);
    }

    private buildLocation() {
        return new Location(this.url);
    }

    private buildBackground() {
        return new Background(this.backgroundStyle, this.descriptionTextColor);
    }

    private _backgroundStyle: string = this.buildStyle();

    get backgroundStyle(): string {
        return this._backgroundStyle;
    }

    set backgroundStyle(value: string){
        this._backgroundStyle = value;
    }

    rebuildStyle(): void {
        this.backgroundStyle = this.buildStyle();
    }


    buildStyle(): string {
        let rgba = this.colorOne;
        let rgba2 = this.colorTwo;
        return "linear-gradient(to right, " + rgba + ", " + rgba2 + ")";
    }



    private buildReachBlob() {
        return this.localReachService.createReach(this.reachFile);
    }

    private buildDescription() {
        return new Description(this.excerpt, this.description);
    }

    fileChosen(chosenFile: File): void {
        this.reachFile = Observable.of(chosenFile);
        this.rebuildProject();
    }

    fileUploaded(success: boolean) {

    }

    get maxProjectCount(): Observable<number> {
        return this.projectService
            .projectCount()
            .map(count=>++count);
    }
}