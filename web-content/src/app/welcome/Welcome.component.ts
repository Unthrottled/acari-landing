import {Component} from '@angular/core';

@Component({
    selector: 'welcome',
    template: require('./Welcome.component.htm')
})
export class WelcomeComponent {

    endingStatement: string = 'The content below is a rich collection of various projects that capture the principals that drive our passion. ' +
        'The never ending quest of continuous improvement is what drives us everyday. Hopefully, we have produced something that you are looking to find!';

    constructor() {
    }

}