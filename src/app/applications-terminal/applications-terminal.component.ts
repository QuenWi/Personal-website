import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-applications-terminal',
  templateUrl: './applications-terminal.component.html',
  styleUrl: './applications-terminal.component.scss'
})
export class ApplicationsTerminalComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Terminal');
  }
}
