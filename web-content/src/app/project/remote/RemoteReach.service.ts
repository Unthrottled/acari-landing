import {Injectable} from "@angular/core";
import {BackendAPIService} from "../../util/BackendAPI.service";
import {RemoteReach} from "../model/RemoteReach.model";
import {Identifier} from "../model/Identifier.model";
import {WindowRef} from "../../util/window";

@Injectable()
export class RemoteReachService {

    constructor(private backendAPI: BackendAPIService, private widowRef: WindowRef) {

    }

    public fetchReach(reachId: string): RemoteReach {
        return new RemoteReach(new Identifier(reachId),
            this.backendAPI.fetchImage(reachId)
                .map(arrayBuffer=>{
                    let binary = '';
                    let bytes = new Uint8Array(arrayBuffer);
                    let len = bytes.byteLength;
                    for(let i = 0; i < len; ++i){
                        binary += String.fromCharCode(bytes[i]);
                    }
                    return 'data:image/png;base64,' + this.widowRef.nativeWindow.btoa(binary);
                }));
    }
}