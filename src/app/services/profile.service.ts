import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../data-model/user';
import { ServiceConfig } from '../config/config';

@Injectable()
export class ProfileService {
    public storage: Storage = localStorage;

    constructor(private _http: HttpClient) { }

    loginUser(username: string, password: string): Observable<User> {
        return this._http.post<User>(ServiceConfig.host + '/login', { username: username, password: password })
            .catch(this.handleError);
    }

    getCurrentUserId(): string {
        return this.storage.getItem('user_id');
    }

    getCurrentUserFullName(): string {
        return this.storage.getItem('first_name') + this.storage.getItem('last_name');
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}