import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UploadFileService} from "./UploadFile.service";
@Component({
    selector: 'file-upload',
    template: require('./UploadFile.component.htm')
})
export class UploadFileComponent {


    constructor(private uploadService: UploadFileService) {
    }

    private _selectedFiles: any[] = [];

    selectFile(event: any): void {
        this.selectedFiles = event.target.files;
    }


    get selectedFiles(): any[] {
        return this._selectedFiles;
    }

    set selectedFiles(value: any[]) {
        this._selectedFiles = value;
    }

    get isUploadable(): Observable<boolean>{
        return Observable.of(this.selectedFiles.length > 0);
    }

    upload(): void {
        // this.selectedFiles
        //     .map()
    }
}