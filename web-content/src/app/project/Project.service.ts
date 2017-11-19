import {Injectable, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Project} from "./model/Project.model";
import {LocalProject} from "./model/LocalProject.model";
import {LocalProjectFactory} from "./LocalProject.factory";
import {RemoteProject} from "./model/RemoteProject.model";
import {ProjectUploadService} from "./upload/ProjectUpload.service";
import {ProjectUpdateService} from "./upload/ProjectUpdate.service";
import {RemoteProjectService} from "./RemoteProject.service";

@Injectable()
export class ProjectService implements OnInit {
    constructor(private localProjectFactory: LocalProjectFactory,
                private projectUploadService: ProjectUploadService,
                private projectUpdateService: ProjectUpdateService,
                private remoteProjectService: RemoteProjectService) {
<<<<<<< HEAD
<<<<<<< HEAD
        this.remoteProjectService.fetchProjects()
            .subscribe(remoteProjects => {
                remoteProjects.forEach(remoteProject => this.projectList.push(remoteProject));
            });
=======

>>>>>>> parent of 8f08cb7... less security.... for now
=======

>>>>>>> parent of 8f08cb7... less security.... for now
    }

    private _projectList: Project[] = [];

    get projectList(): Project[] {
        return this._projectList;
    }

    set projectList(value: Project[]) {
        this._projectList = value;
    }

    ngOnInit(): void {
        this.remoteProjectService.fetchProjects()
            .subscribe(remoteProjects => {
                remoteProjects.forEach(remoteProject => this.projectList.push(remoteProject));
            });
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
            this.removeRemote(<RemoteProject>projectToRemove)
                .defaultIfEmpty(false)
                .subscribe(result => {
                    //todo: something meaningful??
                })
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
                if (project.isLocal()) {
                    this.projectUploadService.pushFileToStorage(<LocalProject>project)
                        .subscribe(newProject => this.hydrateProject(newProject));
                } else if (project.isRemote()) {
                    this.projectUpdateService.updateFileInStorage(<RemoteProject>project)
                        .subscribe(updatedProject => this.hydrateProject(updatedProject));
                }
            });
        return Observable.of(true);
    }

    private hydrateProject(project: Project) {
        this.projectList[project.projectRank - 1] = project;
    }


    private removeLocal(projectToRemove: LocalProject) {
        let start = this.removeProjectFromList(projectToRemove);
        this.promoteOtherProjects(start);
    }

    private removeRemote(projectToRemove: RemoteProject): Observable<boolean> {
        return this.removeRemoteProjectFromList(projectToRemove)
            .map(removalIndex => this.promoteOtherProjects(removalIndex))
            .filter(b => b)
            .flatMap(b => this.saveAllProjects());
    }

    private promoteOtherProjects(start: number): boolean {
        for (let i = start; i < this.projectList.length; i++)
            this.projectList[i].projectRank--;
        return true;
    }

    private removeRemoteProjectFromList(projectToRemove: RemoteProject): Observable<number> {
        return this.remoteProjectService.removeProject(projectToRemove)
            .filter(b => b)
            .map(b => this.removeProjectFromList(projectToRemove));
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