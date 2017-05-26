import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';
    selectedOption: string;
    constructor() { }

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
