import {ExportableProject} from "./ExportableProject";
import {Observable} from "rxjs/Observable";
import {Description} from "./Description.model";
import {ReachInterface} from "./ReachInterface";
import {Location} from './Location.model'
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";

export class Project extends ExportableProject {


    constructor(description: Description = new Description(),
                reach: ReachInterface,
                background: Background,
                location: Location = new Location(),
                rank: ProjectRank) {
        super(description, reach, background, location, rank);
    }

    get url(): string {
        return this.location.url;
    }

    get preachySpeechy(): string{
        return this.description.preachySpeechy;
    }


    get excerpt(): string{
        return this.description.excerpt;
    }


    get reachBlob(): Observable<any> {
        return this.selectedReach.imageBinary();
    }

    get backgroundColor(): string {
        return this.background.backgroundStyle;
    }

    get descriptionTextColor(): string {
        return this.background.textColor;
    }
}