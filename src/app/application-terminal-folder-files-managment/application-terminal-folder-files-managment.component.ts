import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-application-terminal-folder-files-managment',
  templateUrl: './application-terminal-folder-files-managment.component.html',
  styleUrl: './application-terminal-folder-files-managment.component.scss'
})
export class ApplicationTerminalFolderFilesManagmentComponent {
  ngOnInit(){
    HeaderComponent.changeBackgroundColor('navigationBar_link_Programms_Terminal');
  }

  changeImage(imgNr:string):void
  {
    const img = (<HTMLImageElement>document.getElementById('image'));
    img.src = "../../assets/Images/Application_Terminal_Folder_Files_Managment/" + imgNr + ".png";
  }
}
