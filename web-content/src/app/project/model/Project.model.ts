import {ExportableProject} from "./ExportableProject";
import {Observable} from "rxjs/Observable";
import {Description} from "./Description.model";
import {ReachInterface} from "./ReachInterface";
import {Location} from './Location.model'
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {LocalReach} from "./LocalReach.model";

export abstract class Project extends ExportableProject {
    private _dirty: boolean = false;

    constructor(description: Description = new Description(),
                reach: ReachInterface = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, background, location, rank);
        this._selectedReach = reach;
    }

    private _selectedReach: ReachInterface;

    get selectedReach(): ReachInterface {
        return this._selectedReach;
    }

    set selectedReach(value: ReachInterface) {
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
}