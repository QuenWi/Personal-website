import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-others-java-challanges',
  templateUrl: './application-others-java-challanges.component.html',
  styleUrl: './application-others-java-challanges.component.scss'
})
export class ApplicationOthersJavaChallangesComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Other');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Other_Java_Challanges/" + imgNr + ".png";
  }
}
