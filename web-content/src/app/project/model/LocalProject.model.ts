import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Location} from "./Location.model";
import {Observable} from "rxjs/Observable";

export class LocalProject extends Project {
    constructor(description: Description = new Description(),
                localReach: LocalReach = new LocalReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, localReach, background, location, rank);
    }

    /**
     * dis feels janky.
     * @returns {Observable<File>}
     */
    get reachFile(): Observable<File> {
        if (this.selectedReach instanceof LocalReach) {
            return (<LocalReach>this.selectedReach).selectedFile;
        } else {
            return Observable.empty();
        }

    }

    isLocal(): boolean {
        return true;
    }

    isRemote(): boolean {
        return false;
    }
}