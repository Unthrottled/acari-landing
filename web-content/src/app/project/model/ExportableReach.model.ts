import {Identifier} from "./Identifier.model";

export class ExportableReach {
    constructor(identifier: Identifier = new Identifier()) {
        this._identifier = identifier;
    }

    private _identifier: Identifier;

    get identifier(): Identifier {
        return this._identifier;
    }

    set identifier(value: Identifier) {
        this._identifier = value;
    }
}