
import {Pipe, PipeTransform} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
    name: 'safetyStyle'
})
export class SafetyStylePipe implements PipeTransform {


    constructor(private sanitizer: DomSanitizer) {
    }

    transform(value: any, ...args: any[]): any {
        return this.sanitizer.bypassSecurityTrustStyle(value);
    }

}