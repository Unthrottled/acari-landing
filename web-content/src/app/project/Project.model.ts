import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjecRank} from "./ProjectRank.model";
import {Reach} from "./Reach.model";

export class Project {
    selectedReach: Reach;
    rank: ProjecRank;
    background: Background;
    description: Description;
    location: Location;
}