import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Location} from "./Location.model";

export class LocalProject extends Project {

    constructor(description: Description,
                private localReach: LocalReach,
                background: Background,
                location: Location,
                rank: ProjectRank) {
        super(description, localReach, background, location, rank);
    }

    get reachFile(): File {
        return this.localReach.selectedFile;
    }
}