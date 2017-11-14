import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Location} from "./Location.model";
import {Observable} from "rxjs/Observable";

export class LocalProject extends Project {
    remove(): void {
    }

    update(): void {
    }

    constructor(description: Description = new Description(),
                private localReach: LocalReach = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, localReach, background, location, rank);
    }

    get reachFile(): Observable<File> {
        return this.localReach.selectedFile;
    }
}