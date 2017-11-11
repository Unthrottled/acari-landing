import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {RemoteReach} from "../model/RemoteReach.model";

@Injectable()
export class RemoteReachService {

    constructor(private backendAPI: BackendAPIService) {

    }

    public fetchReach(reachId: string): RemoteReach {
        return new RemoteReach(this.backendAPI.fetchImage(reachId));
    }
}