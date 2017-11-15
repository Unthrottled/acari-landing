import {Injectable} from "@angular/core";
import {BackendAPIService} from "../util/BackendAPI.service";
import {Observable} from "rxjs/Observable";
import {Project} from "./model/Project.model";
import {LocalProject} from "./model/LocalProject.model";
import {LocalProjectFactory} from "./LocalProject.factory";
import {RemoteProject} from "./model/RemoteProject.model";

@Injectable()
export class ProjectService {

    constructor(private backendAPIService: BackendAPIService,
                private localProjectFactory: LocalProjectFactory) {

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

    removeProject(projectToRemove: Project): void {
        if(projectToRemove instanceof RemoteProject){

        } else if(projectToRemove instanceof LocalProject) {
            this.removeLocal(projectToRemove);
        }
    }

    private removeLocal(projectToRemove: LocalProject) {
        let start = projectToRemove.projectRank - 1;
        this.projectList.splice(start, 1);
        //promotions!!
        for (let i = start; i < this.projectList.length; i++)
            this.projectList[i].projectRank--;
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

    saveAllProjects(): Observable<boolean> {
        //todo: future me start here! -Love Past You <3
        this.projectList
            .filter(project=>project.dirtyGurl)
            .forEach(project=>{
                if(project.isLocal()){

                } else if (project.isRemote()){

                }
            });
        return Observable.of(true);
    }

    private promoteDemote(projectToPromoteIndex: number, projectToDemoteIndex: number) {
        this.projectList[projectToPromoteIndex].projectRank--;
        this.projectList[projectToDemoteIndex].projectRank++;
        this.CHANGE_PLACES(projectToDemoteIndex, projectToPromoteIndex);
    }

    private createProject(): LocalProject {
        return this.localProjectFactory.createProject();
    }


    private CHANGE_PLACES(indexOne: number, indexTwo: number) {
        let placeHolder = this.projectList[indexOne];
        this.projectList[indexOne] = this.projectList[indexTwo];
        this.projectList[indexTwo] = placeHolder;
    }
}