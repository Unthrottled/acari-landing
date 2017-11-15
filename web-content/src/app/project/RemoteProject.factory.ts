import {Injectable} from "@angular/core";
import {RemoteProject} from "./model/RemoteProject.model";

@Injectable()
export class RemoteProjectFactory {

    constructor() {
    }

    createProject(json: any): RemoteProject {
        return new RemoteProject();
    }
}