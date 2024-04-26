import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ApplicationsAIComponent } from './applications-ai/applications-ai.component';
import { ApplicationsTerminalComponent } from './applications-terminal/applications-terminal.component';
import { ApplicationsFullStackFrontEndComponent } from './applications-full-stack-front-end/applications-full-stack-front-end.component';
import { GitHubLinkedInComponent } from './git-hub-linked-in/git-hub-linked-in.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationAIHNSWOPTICSComponent } from './application-ai-hnsw-optics/application-ai-hnsw-optics.component';
import { ApplicationOthersComponent } from './application-others/application-others.component';
import { ApplicationOthersJavaChallangesComponent } from './application-others-java-challanges/application-others-java-challanges.component';
import { ProgrammingSkillsComponent } from './programming-skills/programming-skills.component';
import { ApplicationFullStackFrontEndPersonalWebsiteComponent } from './application-full-stack-front-end-personal-website/application-full-stack-front-end-personal-website.component';
import { ApplicationFullStackFrontEndToDoListComponent } from './application-full-stack-front-end-to-do-list/application-full-stack-front-end-to-do-list.component';
import { ApplicationFullStackFrontEndDailyMathComponent } from './application-full-stack-front-end-daily-math/application-full-stack-front-end-daily-math.component';
import { ApplicationTerminalFolderFilesManagmentComponent } from './application-terminal-folder-files-managment/application-terminal-folder-files-managment.component';
import { ApplicationTerminalStartpageManagerComponent } from './application-terminal-startpage-manager/application-terminal-startpage-manager.component';
import { ApplicationTerminalSpotifyPlaylistConverterComponent } from './application-terminal-spotify-playlist-converter/application-terminal-spotify-playlist-converter.component';

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent
  },
  {
    path: 'Applications_AI',
    component: ApplicationsAIComponent
  },
  {
    path: 'Applications_Terminal',
    component: ApplicationsTerminalComponent
  },
  {
    path: 'Applications_FullStack_FrontEnd',
    component: ApplicationsFullStackFrontEndComponent
  },
  {
    path: 'GitHub_LinkedIn',
    component: GitHubLinkedInComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Application_AI_HNSW_OPTICS',
    component: ApplicationAIHNSWOPTICSComponent
  },
  {
    path: 'Applications_Other',
    component: ApplicationOthersComponent
  },
  {
    path: 'Application_Other_Java_Challanges',
    component: ApplicationOthersJavaChallangesComponent
  },
  {
    path: 'Programming_Skills',
    component: ProgrammingSkillsComponent
  },
  {
    path: 'Application_FullStack_FrontEnd_Personal_Website',
    component: ApplicationFullStackFrontEndPersonalWebsiteComponent
  },
  {
    path: 'Application_FullStack_FrontEnd_ToDo_List',
    component: ApplicationFullStackFrontEndToDoListComponent
  },
  {
    path: 'Application_FullStack_FrontEnd_Daily_Math',
    component: ApplicationFullStackFrontEndDailyMathComponent
  },
  {
    path: 'Application_Terminal_Folder_Files_Managment',
    component: ApplicationTerminalFolderFilesManagmentComponent
  },
  {
    path: 'Application_Terminal_Startpage_Manager',
    component: ApplicationTerminalStartpageManagerComponent
  },
  {
    path: 'Application_Terminal_Spotify_Playlist_Converter',
    component: ApplicationTerminalSpotifyPlaylistConverterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

