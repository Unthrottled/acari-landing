import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Location} from "./Location.model";

export class LocalProject extends Project {
    constructor(description: Description = new Description(),
                localReach: LocalReach = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, localReach, background, location, rank);
    }

    isLocal(): boolean {
        return true;
    }

    isRemote(): boolean {
        return false;
    }
}