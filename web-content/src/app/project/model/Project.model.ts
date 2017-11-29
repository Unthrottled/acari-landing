import {Observable} from "rxjs/Observable";
import {Description} from "./Description.model";
import {ReachInterface} from "./ReachInterface";
import {Location} from './Location.model'
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {LocalReach} from "./LocalReach.model";
import {ExportableLocalProject} from "./ExportableLocalProject.model";
import {ExportableReach} from "./ExportableReach.model";

export abstract class Project {
    private _dirty: boolean = false;
    private _rank: ProjectRank;
    private _background: Background;
    private _description: Description;
    private _location: Location;

    constructor(description: Description = new Description(),
                reach: ReachInterface = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        this._selectedReach = reach;
        this._description = description;
        this._background = background;
        this._location = location;
        this._rank = rank;
    }

    private _selectedReach: ReachInterface;

    exportableLocalProject(exportableReach: ExportableReach): ExportableLocalProject {
        return new ExportableLocalProject(exportableReach, this.description,
            this.background, this.location, this.rank);
    }

    get selectedReach(): ReachInterface {
        return this._selectedReach;
    }


    /**
     * dis feels janky.
     * @returns {Observable<File>}
     */
    get reachFile(): Observable<File> {
        if (this.selectedReach instanceof LocalReach) {
            return (<LocalReach>this.selectedReach).selectedFile;
        } else {
            return Observable.empty();
        }

    }

    public setSelectedReach(value: ReachInterface) {
        this.thatGurlIsFreaky();
        this._selectedReach = value;
    }

    get dirtyGurl(): boolean {
        return this._dirty;
    }

    get url(): string {
        return this.location.url;
    }

    set url(value: string) {
        this.thatGurlIsFreaky();
        this.location.url = value;
    }

    get textColor(): string {
        return this.background.textColor;
    }

    set textColor(value: string) {
        this.thatGurlIsFreaky();
        this.background.textColor = value;
    }

    get colorTwo(): string {
        return this.background.colorTwo;
    }

    set colorTwo(value: string) {
        this.thatGurlIsFreaky();
        this.background.colorTwo = value;
    }

    get colorOne(): string {
        return this.background.colorOne;
    }

    set colorOne(value: string) {
        this.thatGurlIsFreaky();
        this.background.colorOne = value;
    }

    get preachySpeechy(): string {
        return this.description.preachySpeechy;
    }

    set preachySpeechy(value: string) {
        this.thatGurlIsFreaky();
        this.description.preachySpeechy = value;
    }

    get projectRank(): number {
        return this.rank.rank;
    }

    set projectRank(value: number) {
        this.thatGurlIsFreaky();
        this.rank.rank = value;
    }

    get excerpt(): string {
        return this.description.excerpt;
    }

    set excerpt(value: string) {
        this.thatGurlIsFreaky();
        this.description.excerpt = value;
    }

    get reachBlob(): Observable<any> {
        return this.selectedReach.imageBinary();
    }

    get isUploadable(): boolean {
        return this.selectedReach.isLoaded();
    }

    get backgroundColor(): string {
        return this.background.backgroundStyle;
    }

    get descriptionTextColor(): string {
        return this.background.textColor;
    }

    set descriptionTextColor(value: string) {
        this.thatGurlIsFreaky();
        this.background.textColor = value;
    }

    abstract isLocal(): boolean;

    abstract isRemote(): boolean;

    private thatGurlIsFreaky(): void {
        this._dirty = true;
    }

    get rank(): ProjectRank {
        return this._rank;
    }

    get background(): Background {
        return this._background;
    }

    get description(): Description {
        return this._description;
    }

    get location(): Location {
        return this._location;
    }


    get hoverColor(): string {
        return this._background.hoverColor;
    }

    set hoverColor(value: string) {
        this.thatGurlIsFreaky();
        this._background.hoverColor = value;
    }

    get fileName(): string {
        return this.description.projectName
    }

    set fileName(value: string){
        this.description.projectName = value;
    }
}