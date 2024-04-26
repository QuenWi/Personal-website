import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-terminal-startpage-manager',
  templateUrl: './application-terminal-startpage-manager.component.html',
  styleUrl: './application-terminal-startpage-manager.component.scss'
})
export class ApplicationTerminalStartpageManagerComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Terminal');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Terminal_Startpage_Manager/" + imgNr + ".png";
  }
}
