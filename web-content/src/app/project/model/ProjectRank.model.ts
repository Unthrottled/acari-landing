export class ProjectRank {
    private _rank: number;


    constructor(rank: number) {
        this._rank = rank;
    }


    get rank(): number {
        return this._rank;
    }
}