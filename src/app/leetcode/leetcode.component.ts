import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrl: './leetcode.component.scss'
})
export class LeetcodeComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Leetcode');
  }
}
