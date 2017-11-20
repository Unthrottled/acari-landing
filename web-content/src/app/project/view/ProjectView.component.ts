import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {Project} from "../model/Project.model";
import {RedirectService} from "../../util/RedirectService";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'project-view',
    template: require('./ProjectView.component.htm')
})
export class ProjectViewComponent {

    constructor(private redirectService: RedirectService,
                private elementRef: ElementRef,
                private renderer: Renderer2) {
    }

    private _project: Project;

    @Input()
    get project(): Project {
        return this._project;
    }

    set project(value: Project) {
        this._project = value;
    }

    get description(): string {
        return this._project.preachySpeechy;
    }


    get excerpt(): string {
        return this.project.excerpt;
    }

    get reachBinary(): Observable<any> {
        return this.project.reachBlob;
    }


    get backgroundStyle(): string {
        return this.project.backgroundColor;
    }

    get textColor(): string {
        return this.project.descriptionTextColor;
    }

    redirect(): void {
        this.redirectService.redirectToUrl(this.project.url);
    }

    mouseEnter(): void {
        this.changeBackroundStyle('pink');
    }

    private container_hover_color: string = '';

    mouseLeave(): void {
        this.changeBackroundStyle('');
    }

    private changeBackroundStyle(style: string): void {
        this.container_hover_color = style;
    }
}