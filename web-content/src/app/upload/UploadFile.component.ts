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

    private _selectedFiles: any;

    selectFile(event: any): void {
        this.selectedFiles = event.target.files.item(0);
    }


    get selectedFiles(): any {
        return this._selectedFiles;
    }

    set selectedFiles(value: any) {
        this._selectedFiles = value;
    }

    get notUploadable(): Observable<boolean>{
        return Observable.of(isNullOrUndefined(this.selectedFiles));
    }

    upload(): void {
        // this.selectedFiles
        //     .map()
    }
}