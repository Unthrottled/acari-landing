import {Injectable} from "@angular/core";
import {BackendAPIService} from "../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {Project} from "./model/Project.model";
import {LocalProject} from "./model/LocalProject.model";
import {LocalProjectService} from "./LocalProjectService";

@Injectable()
export class ProjectService {

    constructor(private backendAPIService: BackendAPIService,
                private localProjectService: LocalProjectService) {

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
        if (projectToPromoteIndex > 0) {
            let projectToDemoteIndex = projectToPromoteIndex - 1;
            this.promoteDemote(projectToPromoteIndex, projectToDemoteIndex);
        }
    }

    demoteProject(projectToDemote: Project): void {
        let projectToPromoteIndex = projectToDemote.projectRank;
        if (projectToPromoteIndex < this.projectList.length) {
            let projectToDemoteIndex = projectToPromoteIndex - 1;//project passed in
            this.projectList[projectToPromoteIndex].projectRank--;
            this.projectList[projectToDemoteIndex].projectRank++;
            this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
        }
    }

    private promoteDemote(projectToPromoteIndex: number, projectToDemoteIndex: number) {
        this.projectList[projectToPromoteIndex].projectRank--;
        this.projectList[projectToDemoteIndex].projectRank++;
        this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
    }

    private createProject(): LocalProject {
        return this.localProjectService.createProject();
    }


    private CHANGE_PLACES(indexOne: number, indexTwo: number) {
        let placeHolder = this.projectList[indexOne];
        this.projectList[indexOne] = this.projectList[indexTwo];
        this.projectList[indexTwo] = placeHolder;
    }
}