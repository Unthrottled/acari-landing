import {Project} from "./Project.model";

export class RemoteProject extends Project {
    isLocal(): boolean {
        return false;
    }

    isRemote(): boolean {
        return true;
    }

}