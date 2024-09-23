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
