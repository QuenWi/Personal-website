import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-terminal-spotify-playlist-converter',
  templateUrl: './application-terminal-spotify-playlist-converter.component.html',
  styleUrl: './application-terminal-spotify-playlist-converter.component.scss'
})
export class ApplicationTerminalSpotifyPlaylistConverterComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Terminal');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Terminal_Spotify_Playlist_Converter/" + imgNr + ".jpg";
  }
}
