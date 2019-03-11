import { ConfigService } from './services/config.service';
import { Config } from './interfaces/config';
import { NgModule } from '@angular/core';
import { Mugan86YoutubeApiComponent } from './mugan86-youtube-api.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YoutubePipe } from './pipes/youtube.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { throwError } from 'rxjs';
import { DateHourPipe } from './pipes/date-hour.pipe';

const COMPONENTS = [Mugan86YoutubeApiComponent, VideoPlayerComponent, ChannelComponent, ModalVideoComponent];
const PIPES = [YoutubePipe, DomSecurePipe, DateHourPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [
    NgbModule
  ],
  exports: [...COMPONENTS, ...PIPES],
  entryComponents: [
    ModalVideoComponent
  ]
})
export class Mugan86YoutubeApiModule {
  public static forRoot(config: Config) {
    if (config.apiKey === undefined || config.apiKey === null || config.apiKey === '') {
      throwError('Api key no introducida');
    }
    return {
      ngModule: Mugan86YoutubeApiModule,
      providers: [
        ConfigService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
