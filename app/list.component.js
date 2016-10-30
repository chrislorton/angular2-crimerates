System.register(['angular2/core', './list.service', './stats.component'], function(exports_1, context_1) {
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
    var core_1, list_service_1, stats_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_service_1_1) {
                list_service_1 = list_service_1_1;
            },
            function (stats_component_1_1) {
                stats_component_1 = stats_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(listService) {
                    this.title = "Choose a state";
                    this.chosenID = null;
                    this.chosenState = null;
                    this.chosenStateName = null;
                    this.chosenStateClass = null;
                    this.chosenStateMurder = null;
                    this.chosenStateAssault = null;
                    this.chosenStateUrbanPop = null;
                    this.chosenStateRape = null;
                    this.states = listService.getData();
                }
                ListComponent.prototype.onChange = function (stateID) {
                    this.chosenID = stateID;
                    this.chosenState = this.states[stateID];
                    this.chosenStateName = this.chosenState.State;
                    this.chosenStateClass = this.chosenState.Class;
                    this.chosenStateMurder = this.chosenState.Murder;
                    this.chosenStateAssault = this.chosenState.Assault;
                    this.chosenStateUrbanPop = this.chosenState.UrbanPop;
                    this.chosenStateRape = this.chosenState.Rape;
                };
                ;
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        templateUrl: 'app/list.template.html',
                        directives: [stats_component_1.StatsComponent],
                        providers: [list_service_1.ListService]
                    }), 
                    __metadata('design:paramtypes', [list_service_1.ListService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map