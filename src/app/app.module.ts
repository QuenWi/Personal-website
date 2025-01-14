import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ApplicationsAIComponent } from './applications-ai/applications-ai.component';
import { ApplicationsTerminalComponent } from './applications-terminal/applications-terminal.component';
import { ApplicationsFullStackFrontEndComponent } from './applications-full-stack-front-end/applications-full-stack-front-end.component';
import { GitHubLinkedInComponent } from './git-hub-linked-in/git-hub-linked-in.component';
import { ContactComponent } from './contact/contact.component';
import { ApplicationAIHNSWOPTICSComponent } from './application-ai-hnsw-optics/application-ai-hnsw-optics.component';
import { ApplicationOthersJavaChallangesComponent } from './application-others-java-challanges/application-others-java-challanges.component';
import { ApplicationOthersComponent } from './application-others/application-others.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammingSkillsComponent } from './programming-skills/programming-skills.component';
import { ApplicationFullStackFrontEndPersonalWebsiteComponent } from './application-full-stack-front-end-personal-website/application-full-stack-front-end-personal-website.component';
import { ApplicationFullStackFrontEndToDoListComponent } from './application-full-stack-front-end-to-do-list/application-full-stack-front-end-to-do-list.component';
import { ApplicationFullStackFrontEndDailyMathComponent } from './application-full-stack-front-end-daily-math/application-full-stack-front-end-daily-math.component';
import { ApplicationTerminalFolderFilesManagmentComponent } from './application-terminal-folder-files-managment/application-terminal-folder-files-managment.component';
import { ApplicationTerminalStartpageManagerComponent } from './application-terminal-startpage-manager/application-terminal-startpage-manager.component';
import { ApplicationTerminalSpotifyPlaylistConverterComponent } from './application-terminal-spotify-playlist-converter/application-terminal-spotify-playlist-converter.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';
import { EmbeddedSystemComponent } from './embedded-system/embedded-system.component';
import { EmbeddedSystemSchedulerPriorityQueueComponent } from './embedded-system-scheduler-priority-queue/embedded-system-scheduler-priority-queue.component';
import { EmbeddedSystemAnalogSensorAnalysisComponent } from './embedded-system-analog-sensor-analysis/embedded-system-analog-sensor-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ApplicationsAIComponent,
    ApplicationsTerminalComponent,
    ApplicationsFullStackFrontEndComponent,
    GitHubLinkedInComponent,
    ContactComponent,
    ApplicationAIHNSWOPTICSComponent,
    ApplicationOthersJavaChallangesComponent,
    ApplicationOthersComponent,
    FooterComponent,
    ProgrammingSkillsComponent,
    ApplicationFullStackFrontEndPersonalWebsiteComponent,
    ApplicationFullStackFrontEndToDoListComponent,
    ApplicationFullStackFrontEndDailyMathComponent,
    ApplicationTerminalFolderFilesManagmentComponent,
    ApplicationTerminalStartpageManagerComponent,
    ApplicationTerminalSpotifyPlaylistConverterComponent,
    LeetcodeComponent,
    EmbeddedSystemComponent,
    EmbeddedSystemSchedulerPriorityQueueComponent,
    EmbeddedSystemAnalogSensorAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
