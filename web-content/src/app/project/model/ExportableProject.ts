import {Location} from "./Location.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";

export class ExportableProject {
    private _rank: ProjectRank;
    private _background: Background;
    private _description: Description;
    private _location: Location;


    constructor(description: Description,
                background: Background,
                location: Location,
                rank: ProjectRank) {
        this._description = description;
        this._background = background;
        this._location = location;
        this._rank = rank;
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
}