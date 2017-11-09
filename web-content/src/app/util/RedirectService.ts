
import {Injectable} from "@angular/core";
import {WindowRef} from "./window";

@Injectable()
export class RedirectService {


    constructor(private windowRef: WindowRef) {
    }

    public redirectToUrl(url: string): void {
        this.windowRef.nativeWindow.open(url, '_blank');
    }
}