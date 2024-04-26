import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  static lastMenueId = '';

  public static changeBackgroundColor(menueId:string):void{
    if(HeaderComponent.lastMenueId != ''){
      let lastMenueOption = document.getElementById(HeaderComponent.lastMenueId);
      if(lastMenueOption!=null){
        lastMenueOption.style.backgroundColor = '';
      }
    }
    let menueOption = document.getElementById(menueId);
    if(menueOption!=null){
        menueOption.style.backgroundColor = '#10b595';
    }
    HeaderComponent.lastMenueId = menueId;  
  }
}

