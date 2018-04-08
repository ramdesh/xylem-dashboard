import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
        private _profileService: ProfileService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getDeviceList();
    }

    openCreateDeviceDialog(): void {
        let dialogRef = this.dialog.open(CreateDeviceDialog, {
            width: '350px',
            data: { clientId: '', token: '', type: '' }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getDeviceList();
        });
    }

    getDeviceList() {
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

@Component({
    selector: 'create-device-dialog',
    templateUrl: 'create-device-dialog.html',
})
export class CreateDeviceDialog {

    clientId: string;
    token: string;
    type: string;

    constructor(
        public dialogRef: MatDialogRef<CreateDeviceDialog>,
        private _deviceService: DeviceService,
        private _profileService: ProfileService,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {
        let ownerId = this._profileService.getCurrentUserId();
        this._deviceService.createDevice(this.clientId, this.type, ownerId, this.token)
            .subscribe(result => {
                console.log(result);
                this.dialogRef.close();
            });

    }

}
