import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Reach} from "./Reach.model";

export class Project {
    selectedReach: Reach;
    rank: ProjectRank;
    background: Background;
    description: Description;
    location: Location;


    get reachBlob(): Blob {
        return this.selectedReach.rawFile;
    }
}