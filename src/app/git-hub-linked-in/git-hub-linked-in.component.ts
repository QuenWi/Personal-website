import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-git-hub-linked-in',
  templateUrl: './git-hub-linked-in.component.html',
  styleUrl: './git-hub-linked-in.component.scss'
})
export class GitHubLinkedInComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_GitHub/LinkedIn');
  }
}
