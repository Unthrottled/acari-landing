import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {RemoteReach} from "../model/RemoteReach.model";
import {Identifier} from "../model/Identifier.model";

@Injectable()
export class RemoteReachService {

    constructor(private backendAPI: BackendAPIService) {

    }

    public fetchReach(reachId: string): RemoteReach {
        return new RemoteReach(new Identifier(reachId), this.backendAPI.fetchImage(reachId));
    }
}