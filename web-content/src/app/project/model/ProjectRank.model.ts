export class ProjectRank {
    private _rank: number;


    /**
     *
     * @param {number} rank defaults to Smitty Werbenjagermanjensen
     */
    constructor(rank: number = 1) {
        this._rank = rank;
    }


    get rank(): number {
        return this._rank;
    }


    set rank(value: number) {
        this._rank = value;
    }
}