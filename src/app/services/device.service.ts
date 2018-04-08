import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Device } from '../data-model/device';
import { ServiceConfig } from '../config/config';
import { DeviceMessage } from '../data-model/deviceMessage';

@Injectable()
export class DeviceService {
    constructor(private _http: HttpClient) { }

    getDevicesByUser(userId: string): Observable<Device[]> {
        return this._http.get<Device[]>(ServiceConfig.host + '/users/' + userId + '/devices')
            .catch(this.handleError);
    }

    getDeviceMessages(deviceId: string): Observable<DeviceMessage[]> {
        return this._http.get<DeviceMessage[]>(ServiceConfig.host + '/devices/' + deviceId + '/messages')
            .catch(this.handleError);
    }

    createDevice(clientId: string, type: string, ownerId: string, token: string) {
        return this._http.post<Device>(ServiceConfig.host + '/devices', {
            clientId: clientId,
            type: type,
            ownerId: ownerId,
            token: token
        })
            .catch(this.handleError);
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}