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

    private createProject(): Project {
        return new Project();
    }

    changePlaces(newIndex: number, previousIndex: number): void {
        let i = newIndex - 1;
        let previousMinusOne = previousIndex - 1 ;
        console.log(newIndex + " " + previousIndex);
        while (i < previousMinusOne){
            this.projectList[i].projectRank++;
        }
        //sure would be nice if javascript had the comparable interface...
        this.projectList.sort((a,b)=>a.projectRank - b.projectRank);
    }
}