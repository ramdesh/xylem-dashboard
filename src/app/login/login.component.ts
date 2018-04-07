import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../services/profile.service';
import { User } from '../data-model/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    loggedIn: string;

    user: User;

    public storage: Storage = localStorage;

    constructor(private _profileService: ProfileService, private _router: Router) { }

    ngOnInit() {
        this.loggedIn = this.storage.getItem('logged_in');
    }

    login(): void {
        this._profileService.loginUser(this.username, this.password)
            .subscribe(loginResponse => {
                console.log(loginResponse);
                this.user = loginResponse;
                this.storage.setItem('logged_in', 'true');
                this.storage.setItem('user_id', this.user._id);
                this.storage.setItem('username', this.user.username);
                this.storage.setItem('first_name', this.user.firstName);
                this.storage.setItem('last_name', this.user.lastName);
                this._router.navigate(['/device-list']);
            },
            error => {
                console.log(error);
            });
    }

}
