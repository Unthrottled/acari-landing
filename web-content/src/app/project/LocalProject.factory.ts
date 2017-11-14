
import {Injectable} from "@angular/core";
import {LocalProject} from "./model/LocalProject.model";

@Injectable()
export class LocalProjectFactory {

    constructor() {
    }

    createProject(): LocalProject{
        return new LocalProject();
    }
}