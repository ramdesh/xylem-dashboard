import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule } from './material-design/material-design.module';

import { ProfileService } from './services/profile.service';
import { DeviceService } from './services/device.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialDesignModule,
    AppRoutingModule
  ],
  providers: [
      ProfileService,
      DeviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
