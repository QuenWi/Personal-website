import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-embedded-system',
  templateUrl: './embedded-system.component.html',
  styleUrl: './embedded-system.component.scss'
})
export class EmbeddedSystemComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Embedded_Systems');
  }
}
