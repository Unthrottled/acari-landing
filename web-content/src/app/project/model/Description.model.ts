export class Description {
    private static defaultExcerpt = 'Lorem ipsum';
    private static defaultPreachy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi libero, viverra vitae mi et, bibendum lobortis ipsum. Aenean vel sapien luctus, varius quam ac, bibendum nisl. Donec placerat turpis a leo auctor, non vestibulum ex tincidunt. Etiam id congue ligula. Donec vel eros tempus, condimentum erat in, faucibus erat. Ut hendrerit elementum justo eu commodo. \n' +
        '\n' +
        '            Suspendisse vestibulum, justo ut ultricies convallis, elit ante lobortis diam, eu ullamcorper tortor libero sit amet nisi. Curabitur vitae magna elementum, dictum lacus vel, volutpat neque. Cras mauris purus, interdum vel arcu quis, mollis aliquam sem. Nunc posuere ipsum non dapibus porta. Pellentesque tristique aliquet nunc eget maximus. \n' +
        '\n' +
        '            Proin faucibus tellus odio, a malesuada felis dictum ut.\n' +
        ' Integer venenatis in arcu id gravida. Nulla dapibus augue sapien, id tincidunt enim varius vel.';

    constructor(excerpt: string = Description.defaultExcerpt, preachySpeechy: string = Description.defaultPreachy) {
        this._excerpt = excerpt;
        this._preachySpeechy = preachySpeechy;
    }

    private _excerpt: string;

    get excerpt(): string {
        return this._excerpt;
    }

    set excerpt(value: string) {
        this._excerpt = value;
    }

    private _preachySpeechy: string;

    get preachySpeechy(): string {
        return this._preachySpeechy;
    }

    set preachySpeechy(value: string) {
        this._preachySpeechy = value;
    }
}