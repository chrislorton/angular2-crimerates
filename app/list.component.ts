import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {ListService} from './list.service'
import {StatsComponent} from './stats.component'

@Component({
    selector:'list',
    templateUrl: 'app/list.template.html',
    directives: [StatsComponent],
    providers: [ListService]
})

export class ListComponent { 
    title = "Choose a state";
    states;

    chosenID = null;
    chosenState = null;
    chosenStateName = null;
    chosenStateClass = null;
    chosenStateMurder = null;
    chosenStateAssault = null;
    chosenStateUrbanPop = null;
    chosenStateRape = null;

    onChange(stateID){
        this.chosenID = stateID;
        this.chosenState = this.states[stateID];
        this.chosenStateName = this.chosenState.State;
        this.chosenStateClass = this.chosenState.Class;
        this.chosenStateMurder = this.chosenState.Murder;
        this.chosenStateAssault = this.chosenState.Assault;
        this.chosenStateUrbanPop = this.chosenState.UrbanPop;
        this.chosenStateRape = this.chosenState.Rape;
    };

    constructor(listService: ListService){
         this.states = listService.getData();
    } 
}