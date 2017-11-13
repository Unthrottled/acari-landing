import {Injectable} from "@angular/core";
import {BackendAPIService} from "../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {Project} from "./model/Project.model";

@Injectable()
export class ProjectService {

    constructor(private backendAPIService: BackendAPIService) {

    }

    private _projectList: Project[] = [];

    get projectList(): Project[] {
        return this._projectList;
    }

    set projectList(value: Project[]) {
        this._projectList = value;
    }

    projectCount(): Observable<number> {
        return Observable.of(this.projectList.length);
    }

    addProject(): void {
        this.projectList.forEach(project => project.projectRank++);
        this.projectList.unshift(this.createProject());
    }

    promoteProject(projectToPromote: Project): void {
        let projectToPromoteIndex = projectToPromote.projectRank - 1;//project passed in
        console.log(projectToPromoteIndex);
        if (projectToPromoteIndex > 0) {
            let projectToDemoteIndex = projectToPromoteIndex - 1;
            this.projectList[projectToPromoteIndex].projectRank--;
            this.projectList[projectToDemoteIndex].projectRank++;
            this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
        }
    }

    demoteProject(projectToDemote: Project): void {
        let projectToPromoteIndex = projectToDemote.projectRank;
        console.log(projectToPromoteIndex);
        if (projectToPromoteIndex < this.projectList.length) {
            let projectToDemoteIndex = projectToPromoteIndex - 1;//project passed in
            this.projectList[projectToPromoteIndex].projectRank--;
            this.projectList[projectToDemoteIndex].projectRank++;
            this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
        }
    }

    private createProject(): Project {
        return new Project();
    }


    private CHANGE_PLACES(indexOne: number, indexTwo: number) {
        let placeHolder = this.projectList[indexOne];
        this.projectList[indexOne] = this.projectList[indexTwo];
        this.projectList[indexTwo] = placeHolder;
    }
}