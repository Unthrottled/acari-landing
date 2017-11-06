import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {UploadFileService} from "./UploadFile.service";
import {isNullOrUndefined} from "util";
@Component({
    selector: 'file-upload',
    template: require('./UploadFile.component.htm')
})
export class UploadFileComponent {

    @Output()
    private fileSelectedEmitter = new EventEmitter<File>();

    constructor(private uploadService: UploadFileService) {
    }

    private _selectedFile: File;

    selectFile(event: any): void {
        this.selectedFile = event.target.files.item(0);
        this.fileSelectedEmitter.emit(this.selectedFile);
    }


    get selectedFile(): File {
        return this._selectedFile;
    }

    set selectedFile(value: File) {
        this._selectedFile = value;
    }

    get notUploadable(): Observable<boolean>{
        return Observable.of(isNullOrUndefined(this.selectedFile));
    }

    upload(): void {
        this.uploadService.pushFileToStorage(this.selectedFile)
            .subscribe(()=>{}, ()=>{}, ()=> this.selectedFile = null);
    }
}