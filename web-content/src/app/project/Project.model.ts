import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjecRank} from "./ProjectRank.model";

export class Project {
    selectedReach: Blob;
    rank: ProjecRank;
    background: Background;
    description: Description;
    location: Location;
}