import {ExportableProject} from "./ExportableProject";
import {Observable} from "rxjs/Observable";
import {Description} from "./Description.model";
import {ReachInterface} from "./ReachInterface";
import {Location} from './Location.model'
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {LocalReach} from "./LocalReach.model";

export class Project extends ExportableProject {


    constructor(description: Description = new Description(),
                reach: ReachInterface = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, reach, background, location, rank);
    }

    get url(): string {
        return this.location.url;
    }

    get preachySpeechy(): string{
        return this.description.preachySpeechy;
    }

    get projectRank(): number {
        return this.rank.rank;
    }

    set projectRank(value: number) {
        this.rank.rank = value;
    }

    get excerpt(): string{
        return this.description.excerpt;
    }

    get reachBlob(): Observable<any> {
        return this.selectedReach.imageBinary();
    }

    get loadedReach(): Observable<boolean> {
        return this.selectedReach.isLoaded();
    }

    get backgroundColor(): string {
        return this.background.backgroundStyle;
    }

    get descriptionTextColor(): string {
        return this.background.textColor;
    }
}