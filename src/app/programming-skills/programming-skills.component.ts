import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-programming-skills',
  templateUrl: './programming-skills.component.html',
  styleUrl: './programming-skills.component.scss'
})
export class ProgrammingSkillsComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programming_Skills');
  }
}
