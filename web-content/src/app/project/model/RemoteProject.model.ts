import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Location} from "./Location.model"
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Identifier} from "./Identifier.model";

export class RemoteProject extends Project {

    constructor(identifier: Identifier = new Identifier(),
                description: Description = new Description(),
                localReach: LocalReach = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, localReach, background, location, rank);
        this._identifier = identifier;
    }

    private _identifier: Identifier;

    get identifier(): Identifier {
        return this._identifier;
    }

    set identifier(value: Identifier) {
        this._identifier = value;
    }

    isLocal(): boolean {
        return false;
    }

    isRemote(): boolean {
        return true;
    }
}