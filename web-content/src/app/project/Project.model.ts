import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Reach} from "./Reach.model";

export class Project {
    private _selectedReach: Reach;
    private _rank: ProjectRank;
    private _background: Background;
    private _description: Description;
    private _location: Location;


    constructor(description: Description) {
        this._description = description;
    }

    get preachySpeechy(): string{
        return this._description.preachySpeechy;
    }


    get excerpt(): string{
        return this._description.excerpt;
    }


    get reachBlob(): Blob {
        return this._selectedReach.rawFile;
    }

    get reachFile(): File {
        return this._selectedReach.selectedFile;
    }
}