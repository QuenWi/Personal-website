import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_About_me');
  }
}
