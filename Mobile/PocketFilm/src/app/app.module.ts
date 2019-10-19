import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpModule,JsonpModule} from "@angular/http";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { HttpServiceService } from './http-service.service';
import { StorageService } from './storage.service';
import { ConfigService } from './config.service';
import { ToolsService } from './tools.service';
import { BackButtonService } from './back-button.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpModule,
    JsonpModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    ScreenOrientation,
    FileOpener,
    SocialSharing,
    AppVersion,
    Downloader,
    Device,
    StatusBar,
    SplashScreen,
    HttpServiceService,
    StorageService,
    ConfigService,
    ToolsService,
    BackButtonService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
