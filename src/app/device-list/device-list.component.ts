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
            width: '250px',
            data: { clientId: '', token: '', type: '' }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
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

    constructor(
        public dialogRef: MatDialogRef<CreateDeviceDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    close(): void {
        this.dialogRef.close();
    }

    save(): void {

    }

}
