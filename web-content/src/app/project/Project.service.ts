import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Project} from "./model/Project.model";
import {LocalProject} from "./model/LocalProject.model";
import {LocalProjectFactory} from "./LocalProject.factory";
import {RemoteProject} from "./model/RemoteProject.model";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {ProjectUpdateService} from "./upload/ProjectUpdate.service";

@Injectable()
export class ProjectService {

    constructor(private localProjectFactory: LocalProjectFactory,
                private projectUploadService: ProjectUploadService,
                private projectUpdateService: ProjectUpdateService) {

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
        if (projectToRemove instanceof RemoteProject) {
            //todo: remote project completly
        } else if (projectToRemove instanceof LocalProject) {
            this.removeLocal(projectToRemove);
        }
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
        this.projectList
            .filter(project => project.dirtyGurl)
            .forEach(project => {
                this.removeProject(project);
                if (project.isLocal()) {
                    this.projectUploadService.pushFileToStorage(<LocalProject>project)
                        .subscribe(newProject=>{
                            //todo: rehydrate list with remote
                        });
                } else if (project.isRemote()) {
                    this.projectUpdateService.updateFileInStorage(<RemoteProject>project)
                        .subscribe(updatedProject=>{
                            //todo: rehydrate list with remote
                        });
                }
            });
        return Observable.of(true);
    }



    private removeLocal(projectToRemove: LocalProject) {
        let start = this.removeProjectFromList(projectToRemove);
        //promotions!!
        for (let i = start; i < this.projectList.length; i++)
            this.projectList[i].projectRank--;
    }

    private removeProjectFromList(projectToRemove: Project) {
        let start = projectToRemove.projectRank - 1;
        this.projectList.splice(start, 1);
        return start;
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