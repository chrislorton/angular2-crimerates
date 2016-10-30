import {Component, Input} from 'angular2/core'
import {ListService} from './list.service'

@Component({
    selector:'stats',
    templateUrl: 'app/stats.template.html',
    providers: [ListService]
})

export class StatsComponent { 
    @Input() chosenStateID: string;
    @Input() chosenStateMurder: string;
    @Input() chosenStateName: string;
    @Input() chosenStateClass: string;
    @Input() chosenStateAssault: string;
    @Input() chosenStateUrbanPop: string;
    @Input() chosenStateRape: string;
}