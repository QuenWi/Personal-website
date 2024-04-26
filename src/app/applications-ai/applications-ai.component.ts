import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-applications-ai',
  templateUrl: './applications-ai.component.html',
  styleUrl: './applications-ai.component.scss'
})
export class ApplicationsAIComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_AI');
  }
}
