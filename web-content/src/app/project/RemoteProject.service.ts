import {Injectable} from "@angular/core";
import {RemoteProject} from "./model/RemoteProject.model";
import {Observable} from "rxjs/Observable";
<<<<<<< HEAD
import {BackendAPIService} from "../util/BackendAPI.service";
import {RemoteProjectFactory} from "./RemoteProject.factory";
=======
>>>>>>> parent of 8f08cb7... less security.... for now

@Injectable()
export class RemoteProjectService {

<<<<<<< HEAD
    constructor(private backendAPIService: BackendAPIService,
                private remoteProjectFactory: RemoteProjectFactory) {
=======
    constructor() {
>>>>>>> parent of 8f08cb7... less security.... for now
    }

    //todo: impl me
    fetchProjects(): Observable<RemoteProject[]> {
<<<<<<< HEAD
        return this.backendAPIService.fetchAllImages()
            .map(json=><any[]>json)
            .map(json => json.map(projectJson=>this.remoteProjectFactory.createProject(projectJson)));
    }

    removeProject(projectToRemove: RemoteProject): Observable<boolean> {
        return this.backendAPIService.removeProject(projectToRemove.projectId);
=======
        return Observable.empty();
>>>>>>> parent of 8f08cb7... less security.... for now
    }
}