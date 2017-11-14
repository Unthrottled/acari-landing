
import {Injectable} from "@angular/core";
import {LocalProject} from "./model/LocalProject.model";

@Injectable()
export class LocalProjectService {

    constructor() {
    }

    createProject(): LocalProject{
        return new LocalProject();
    }
}