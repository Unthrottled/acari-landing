import {Observable} from "rxjs/Observable";

export interface ReachInterface {
    imageBinary(): Observable<any>;
    isLoaded(): boolean;
}