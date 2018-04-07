import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public storage: Storage = localStorage;
    public loggedIn = 'false';

    constructor() { }

    ngOnInit() {
        this.loggedIn = this.storage.getItem('logged_in');
    }

}
