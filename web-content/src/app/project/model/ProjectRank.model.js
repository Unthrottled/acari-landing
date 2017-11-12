"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectRank = /** @class */ (function () {
    /**
     *
     * @param {number} rank defaults to Smitty Werbenjagermanjensen
     */
    function ProjectRank(rank) {
        if (rank === void 0) { rank = 1; }
        this._rank = rank;
    }
    Object.defineProperty(ProjectRank.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        set: function (value) {
            this._rank = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProjectRank;
}());
exports.ProjectRank = ProjectRank;
//# sourceMappingURL=ProjectRank.model.js.map