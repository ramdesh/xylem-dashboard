import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DeviceListComponent } from './device-list/device-list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'device-list', component: DeviceListComponent }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
