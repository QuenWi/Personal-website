import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-embedded-system-analog-sensor-analysis',
  templateUrl: './embedded-system-analog-sensor-analysis.component.html',
  styleUrl: './embedded-system-analog-sensor-analysis.component.scss'
})
export class EmbeddedSystemAnalogSensorAnalysisComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Embedded_Systems');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Embedded_Systems_Analog_Sensor_Analysis/" + imgNr + ".jpg";
  }
}
