import {ExportableProject} from "./ExportableProject";
import {Observable} from "rxjs/Observable";
import {Description} from "./Description.model";
import {ReachInterface} from "./ReachInterface";
import {Location} from './Location.model'
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";

export class Project extends ExportableProject {


    constructor(description: Description,
                reach: ReachInterface,
                background: Background,
                location: Location,
                rank: ProjectRank) {
        super(description, reach, background, location, rank);
    }

    get url(): string {
        return this._location.url;
    }

    get preachySpeechy(): string{
        return this._description.preachySpeechy;
    }


    get excerpt(): string{
        return this._description.excerpt;
    }


    get reachBlob(): Observable<any> {
        return this._selectedReach.imageBinary();
    }

    get backgroundColor(): string {
        return this._background.backgroundStyle;
    }

    get descriptionTextColor(): string {
        return this._background.textColor;
    }
}