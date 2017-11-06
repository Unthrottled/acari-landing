export class ProjecRank {
    private _rank: number;


    constructor(rank: number) {
        this._rank = rank;
    }


    get rank(): number {
        return this._rank;
    }
}