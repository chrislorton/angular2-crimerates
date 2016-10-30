import {Component} from 'angular2/core';
import {ListComponent} from './list.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>Crime Rates by U.S. State</h1>
                </div>
                <div class="col-xs-12">
                    <list></list>
                </div>
            </div>
        </div>
    `,
    directives:[ListComponent]
})
export class AppComponent {
    
}