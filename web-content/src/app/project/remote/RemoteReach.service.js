"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BackendAPI_service_1 = require("../../util/BackendAPI.service");
var RemoteReach_model_1 = require("../model/RemoteReach.model");
var Identifier_model_1 = require("../model/Identifier.model");
var window_1 = require("../../util/window");
var RemoteReachService = /** @class */ (function () {
    function RemoteReachService(backendAPI, widowRef) {
        this.backendAPI = backendAPI;
        this.widowRef = widowRef;
    }
    RemoteReachService.prototype.fetchReach = function (reachId) {
        var _this = this;
        return new RemoteReach_model_1.RemoteReach(new Identifier_model_1.Identifier(reachId), this.backendAPI.fetchImage(reachId)
            .map(function (arrayBuffer) {
            var binary = '';
            var bytes = new Uint8Array(arrayBuffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; ++i) {
                binary += String.fromCharCode(bytes[i]);
            }
            return 'data:image/png;base64,' + _this.widowRef.nativeWindow.btoa(binary);
        }));
    };
    RemoteReachService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [BackendAPI_service_1.BackendAPIService, window_1.WindowRef])
    ], RemoteReachService);
    return RemoteReachService;
}());
exports.RemoteReachService = RemoteReachService;
//# sourceMappingURL=RemoteReach.service.js.map