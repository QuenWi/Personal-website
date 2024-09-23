import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-ai-hnsw-optics',
  templateUrl: './application-ai-hnsw-optics.component.html',
  styleUrl: './application-ai-hnsw-optics.component.scss'
})
export class ApplicationAIHNSWOPTICSComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_AI');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_AI_HNSW_OPTICS/" + imgNr + ".png";
  }
}
