import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-others',
  templateUrl: './application-others.component.html',
  styleUrl: './application-others.component.scss'
})
export class ApplicationOthersComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Other');
  }
}
