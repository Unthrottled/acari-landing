"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Description = /** @class */ (function () {
    function Description(excerpt, preachySpeechy) {
        if (excerpt === void 0) { excerpt = Description.defaultExcerpt; }
        if (preachySpeechy === void 0) { preachySpeechy = Description.defaultPreachy; }
        this._excerpt = excerpt;
        this._preachySpeechy = preachySpeechy;
    }
    Object.defineProperty(Description.prototype, "excerpt", {
        get: function () {
            return this._excerpt;
        },
        set: function (value) {
            this._excerpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Description.prototype, "preachySpeechy", {
        get: function () {
            return this._preachySpeechy;
        },
        set: function (value) {
            this._preachySpeechy = value;
        },
        enumerable: true,
        configurable: true
    });
    Description.defaultExcerpt = 'Lorem ipsum';
    Description.defaultPreachy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi libero, viverra vitae mi et, bibendum lobortis ipsum. Aenean vel sapien luctus, varius quam ac, bibendum nisl. Donec placerat turpis a leo auctor, non vestibulum ex tincidunt. Etiam id congue ligula. Donec vel eros tempus, condimentum erat in, faucibus erat. Ut hendrerit elementum justo eu commodo. \n' +
        '\n' +
        '            Suspendisse vestibulum, justo ut ultricies convallis, elit ante lobortis diam, eu ullamcorper tortor libero sit amet nisi. Curabitur vitae magna elementum, dictum lacus vel, volutpat neque. Cras mauris purus, interdum vel arcu quis, mollis aliquam sem. Nunc posuere ipsum non dapibus porta. Pellentesque tristique aliquet nunc eget maximus. \n' +
        '\n' +
        '            Proin faucibus tellus odio, a malesuada felis dictum ut.\n' +
        ' Integer venenatis in arcu id gravida. Nulla dapibus augue sapien, id tincidunt enim varius vel.';
    return Description;
}());
exports.Description = Description;
//# sourceMappingURL=Description.model.js.map