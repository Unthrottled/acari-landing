import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UploadFileService} from "./UploadFile.service";
import {isNullOrUndefined} from "util";
@Component({
    selector: 'file-upload',
    template: require('./UploadFile.component.htm')
})
export class UploadFileComponent {


    constructor(private uploadService: UploadFileService) {
    }

    private _selectedFile: any;

    selectFile(event: any): void {
        this.selectedFile = event.target.files.item(0);
    }


    get selectedFile(): any {
        return this._selectedFile;
    }

    set selectedFile(value: any) {
        this._selectedFile = value;
    }

    get notUploadable(): Observable<boolean>{
        return Observable.of(isNullOrUndefined(this.selectedFile));
    }

    upload(): void {
        // this.selectedFile
        //     .map()
    }
}