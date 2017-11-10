import {ExportableProject} from "./ExportableProject";

export class Project extends ExportableProject {

    get url(): string {
        return this._location.url;
    }

    get preachySpeechy(): string{
        return this._description.preachySpeechy;
    }


    get excerpt(): string{
        return this._description.excerpt;
    }


    get reachBlob(): any {
        return this._selectedReach.rawFile;
    }

    get reachFile(): File {
        return this._selectedReach.selectedFile;
    }

    get backgroundColor(): string {
        return this._background.backgroundStyle;
    }

    get descriptionTextColor(): string {
        return this._background.textColor;
    }
}