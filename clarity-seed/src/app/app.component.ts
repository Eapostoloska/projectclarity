import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./../css/main.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public collapsed = true;
    constructor(private router: Router) {
    }
}
