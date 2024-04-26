import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Contact');
  }
}
