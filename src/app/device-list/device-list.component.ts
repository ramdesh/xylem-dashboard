import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../services/device.service';
import { ProfileService } from '../services/profile.service';
import { Device } from '../data-model/device';
import { DeviceMessage } from '../data-model/deviceMessage';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html'
})
export class DeviceListComponent implements OnInit {

    public deviceList: Device[];
    public deviceMessageList: DeviceMessage[];
    public devicesLoaded: boolean;
    public messagesLoaded: boolean;

    displayedColumns = ['topic',  'payload', 'timestamp'];

    constructor(
        private _deviceService: DeviceService,
        private _profileService: ProfileService
    ) { }

    ngOnInit() {
        this._deviceService.getDevicesByUser(this._profileService.getCurrentUserId())
            .subscribe(devices => {
                this.deviceList = devices;
                this.devicesLoaded = true;
            }, error => {
                console.log(error);
            });
    }

    viewDeviceMessages(deviceId: string): void {
        this._deviceService.getDeviceMessages(deviceId)
            .subscribe(deviceMessages => {
                this.deviceMessageList = deviceMessages;
                this.messagesLoaded = true;
            }, error => {
                console.log(error);
            });
    }

}
