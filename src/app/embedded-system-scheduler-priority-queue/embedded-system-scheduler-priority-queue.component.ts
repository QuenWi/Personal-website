import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-embedded-system-scheduler-priority-queue',
  templateUrl: './embedded-system-scheduler-priority-queue.component.html',
  styleUrl: './embedded-system-scheduler-priority-queue.component.scss'
})
export class EmbeddedSystemSchedulerPriorityQueueComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Embedded_Systems');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Embedded_Systems_Scheduler_Priority_Queue/" + imgNr + ".jpg";
  }
}
