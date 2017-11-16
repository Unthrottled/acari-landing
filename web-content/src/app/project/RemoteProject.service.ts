import {Injectable} from "@angular/core";
import {RemoteProject} from "./model/RemoteProject.model";
import {Observable} from "rxjs/Observable";
import {BackendAPIService} from "../util/BackendAPI.service";

@Injectable()
export class RemoteProjectService {

    constructor(private backendAPIService: BackendAPIService) {
    }

    fetchProjects(): Observable<RemoteProject[]> {
        return this.backendAPIService.fetchAllImages();
    }
}