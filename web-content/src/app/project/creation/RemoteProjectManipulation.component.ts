import {Component} from '@angular/core';
import {ProjectService} from "../Project.service";
import {LocalReachService} from "./LocalReach.service";
import {LocalProjectService} from "../LocalProjectService";
import {ProjectManipulationComponent} from "./ProjectManipulation.component";

@Component({
    selector: 'remote-project-manipulation',
    template: require('./ProjectManipulation.component.htm')
})
export class RemoteProjectManipulationComponent extends ProjectManipulationComponent {

    constructor(projectService: ProjectService,
                localReachService: LocalReachService,
                localProjectService: LocalProjectService) {
        super(projectService, localReachService, localProjectService);

    }

}