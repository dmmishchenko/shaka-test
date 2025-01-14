import { Component, ElementRef, Input, viewChild, ViewChild } from '@angular/core';
declare var shaka: any;

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent {
  videoElementRef = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');
  
  @Input() videoUrl: string = '';
  @Input() title: string = '';

  ngAfterViewInit() {
    shaka.polyfill.installAll();

    if (shaka.Player.isBrowserSupported()) {
      const videoElement = this.videoElementRef()?.nativeElement;
      if (videoElement) {
        this.initPlayer(videoElement);
      }
    } else {
      console.error('Browser not supported!');
    }
  }

  private initPlayer(videoElement: HTMLVideoElement) {
    const player = new shaka.Player(videoElement);
    player.addEventListener('error', this.onErrorEvent.bind(this));

    player
      .load(this.videoUrl)
      .then(() => {
        console.log('The video has now been loaded!');
      })
      .catch(this.onError.bind(this));
  }

  private onErrorEvent(event: any) {
    this.onError(event.detail);
  }

  private onError(error: any) {
    console.error('Error code', error.code, 'object', error);
  }
}
