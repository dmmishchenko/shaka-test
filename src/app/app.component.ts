import { Component } from '@angular/core';
import { VideoPlayerComponent } from './video-player/video-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  hlsUrl = 'http://localhost:3000/assets/master.m3u8';
  // working hls url
  // hlsUrl = 'https://test-streams.mux.dev/tos_ismc/main.m3u8';
  dashUrl = 'http://localhost:3000/assets/manifest.mpd';
}
