System.register(['angular2/core', './list.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, list_service_1;
    var StatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            }],
        execute: function() {
            StatsComponent = (function () {
                function StatsComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateID", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateMurder", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateClass", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateAssault", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateUrbanPop", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], StatsComponent.prototype, "chosenStateRape", void 0);
                StatsComponent = __decorate([
                    core_1.Component({
                        selector: 'stats',
                        templateUrl: 'app/stats.template.html',
                        providers: [list_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StatsComponent);
                return StatsComponent;
            }());
            exports_1("StatsComponent", StatsComponent);
        }
    }
});
//# sourceMappingURL=stats.component.js.map