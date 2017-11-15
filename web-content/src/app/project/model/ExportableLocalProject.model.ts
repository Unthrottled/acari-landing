import {ProjectRank} from "./ProjectRank.model";
import {Background} from "./Background.model";
import {Description} from "./Description.model";
import {Location} from "./Location.model";
import {ExportableReach} from "./ExportableReach.model";

export class ExportableLocalProject {

    constructor(private reach: ExportableReach = new ExportableReach(),
                private description: Description = new Description(),
                private background: Background = new Background(),
                private location: Location = new Location(),
                private rank: ProjectRank = new ProjectRank()) {

    }
}