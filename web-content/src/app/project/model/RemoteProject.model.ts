import {Project} from "./Project.model";
import {LocalReach} from "./LocalReach.model";
import {Description} from "./Description.model";
import {Location} from "./Location.model"
import {Background} from "./Background.model";
import {ProjectRank} from "./ProjectRank.model";
import {Identifier} from "./Identifier.model";
import {RemoteReach} from "./RemoteReach.model";
import {ReachInterface} from "./ReachInterface";
import {ExportableReach} from "./ExportableReach.model";
import {ExportableLocalProject} from "./ExportableLocalProject.model";
import {ExportableRemoteProject} from "./ExportableRemoteProject.model";

export class RemoteProject extends Project {

    private remoteReach: RemoteReach;
    constructor(identifier: Identifier = new Identifier(),
                description: Description = new Description(),
                localReach: RemoteReach = new RemoteReach(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(description, localReach, background, location, rank);
        this._identifier = identifier;
        this.remoteReach = localReach;
    }


    exportableLocalProject(exportableReach: ExportableReach): ExportableLocalProject {
        return new ExportableRemoteProject(this.identifier, exportableReach, this.description,
            this.background, this.location, this.rank)
    }

    private _identifier: Identifier;

    get identifier(): Identifier {
        return this._identifier;
    }

    get reachId(): string{
        return this.remoteReach.id;
    }

    get projectId(): string {
        return this.identifier.id;
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

    private newImage = false;

    setSelectedReach(value: ReachInterface) {
        this.newImage = true;
        super.setSelectedReach(value);
    }

    get imageChanged(): boolean {
        return this.newImage;
    }
}