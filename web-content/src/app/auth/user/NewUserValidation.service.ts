/**
 * Created by alex on 9/17/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BackendService} from "../../util/backend.service";
import {ExistsPayload} from "../../pages/models/ExistsPayload.model";

@Injectable()
export class NewUserValidationService {

    constructor(private backendService: BackendService) {

    }

    isValid(pageName: string): Observable<boolean> {
        return pageName.length < 1 ? Observable.create(false) :
            this.backendService
                .userExists(pageName)
                .map((statusPayload: ExistsPayload) => !statusPayload.exists);
    }

}
