import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";

export class Project {
    selectedReach: Blob;
    orderNumber: any;//todo: type dis
    background: Background;
    description: Description;
    location: Location;
}