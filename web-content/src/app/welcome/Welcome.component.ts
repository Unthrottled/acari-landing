import {Component} from '@angular/core';

@Component({
    selector: 'welcome',
    template: require('./Welcome.component.htm')
})
export class WelcomeComponent {

    tempo: string = 'The content below is a rich collection of various projects that capture the principals that drive our passion. The never ending quest of continuous improvement is what drives us, and is what we hope you are looking to find!'.trim();

    constructor() {
    }

}