import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-applications-full-stack-front-end',
  templateUrl: './applications-full-stack-front-end.component.html',
  styleUrl: './applications-full-stack-front-end.component.scss'
})
export class ApplicationsFullStackFrontEndComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_FullStack_FrontEnd');
  }
}
