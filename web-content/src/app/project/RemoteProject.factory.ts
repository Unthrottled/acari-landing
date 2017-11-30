import {Injectable} from "@angular/core";
import {RemoteProject} from "./model/RemoteProject.model";
import {Identifier} from "./model/Identifier.model";
import {Description} from "./model/Description.model";
import {RemoteReachService} from "./remote/RemoteReach.service";
import {Background} from "./model/Background.model";
import {Location} from "./model/Location.model";
import {ProjectRank} from "./model/ProjectRank.model";

@Injectable()
export class RemoteProjectFactory {

    constructor(private remoteReachService: RemoteReachService) {
    }

    createProject(json: any): RemoteProject {
        let identifier = new Identifier(
            json.identifier._id
        );
        let description = new Description(
            json.description._excerpt,
            json.description._preachySpeechy,
            json.description._projectName,
        );
        let remoteReach = this.remoteReachService.fetchReach(
            json.reach._identifier._id
        );
        let background = new Background(
            json.background._colorOne,
            json.background._colorTwo,
            json.background._textColor,
            json.background._hostNameColor,
            json.background._pwdColor,
            json.background._titleColor,
            json.background._hoverColor
        );
        let location2 = new Location(
            json.location._url
        );
        let projectRank = new ProjectRank(
            json.rank._rank
        );
        return new RemoteProject(identifier, description, remoteReach, background, location2, projectRank);
    }
}