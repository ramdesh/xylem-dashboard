import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html'
})
export class DeviceListComponent implements OnInit {

    userId: string;

    constructor(private _deviceService: DeviceService) { }

    ngOnInit() {
    }

}
