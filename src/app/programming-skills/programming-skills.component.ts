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

  showAnswer(nr:string):void
  {
    const answer = (<HTMLImageElement>document.getElementById('answer' + nr));
    const arrow = (<HTMLImageElement>document.getElementById('questionArrow' + nr));
    if(answer.style.maxHeight == "100%"){
      answer.style.maxHeight = "0px";
      arrow.textContent = "△";
    }
    else{
      answer.style.maxHeight = "100%";
      arrow.textContent = "▼";
    }
  }
}
