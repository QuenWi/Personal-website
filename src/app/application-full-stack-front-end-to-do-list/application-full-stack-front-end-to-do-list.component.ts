import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-full-stack-front-end-to-do-list',
  templateUrl: './application-full-stack-front-end-to-do-list.component.html',
  styleUrl: './application-full-stack-front-end-to-do-list.component.scss'
})
export class ApplicationFullStackFrontEndToDoListComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_FullStack_FrontEnd');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_FullStack_FrontEnd_ToDo_List/" + imgNr + ".png";
  }
}
