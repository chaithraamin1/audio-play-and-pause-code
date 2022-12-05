import { Component } from '@angular/core'

declare var WaveSurfer: { create: (arg0: { container: string; waveColor: string; progressColor: string; barWidth: any, responsive: boolean, height: any, barRadius: any }) => any; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'song-soundwave-pattern_pause_play';

  ngOnInit() {
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#ddd',
      progressColor: '#ff006c',
      barWidth: 4,
      responsive: true,
      height: 90,
      barRadius: 4

    });

    wavesurfer.load('/assets/media/Good-Day-Wake-Up-NEFFEX.mp3');

    var playBtn: any = document.getElementById("playBtn");
    playBtn.onclick = function () {
      debugger
      wavesurfer.playPause();
      if (playBtn.src.includes("/assets/media/play.png")) {
        playBtn.src = "/assets/media/pause.png";
      }
      else {
        playBtn.src = "/assets/media/play.png";
      }

    }
    wavesurfer.on('finish', function () {
      playBtn.src = "/assets/media/play.png";
      wavesurfer.stop();
    })
  }
}
