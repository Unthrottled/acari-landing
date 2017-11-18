import {ProjectRank} from "./ProjectRank.model";
import {Background} from "./Background.model";
import {Description} from "./Description.model";
import {Location} from "./Location.model";
import {ExportableReach} from "./ExportableReach.model";
import {ExportableLocalProject} from "./ExportableLocalProject.model";
import {Identifier} from "./Identifier.model";

export class ExportableRemoteProject extends ExportableLocalProject {

    constructor(private identifier: Identifier = new Identifier(),
                reach: ExportableReach = new ExportableReach(),
                description: Description = new Description(),
                background: Background = new Background(),
                location: Location = new Location(),
                rank: ProjectRank = new ProjectRank()) {
        super(reach,description,background,location,rank);

    }
}