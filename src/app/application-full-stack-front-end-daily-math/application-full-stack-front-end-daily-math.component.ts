import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-full-stack-front-end-daily-math',
  templateUrl: './application-full-stack-front-end-daily-math.component.html',
  styleUrl: './application-full-stack-front-end-daily-math.component.scss'
})
export class ApplicationFullStackFrontEndDailyMathComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_FullStack_FrontEnd');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_FullStack_FrontEnd_Daily_Math/" + imgNr + ".png";
  }
}
