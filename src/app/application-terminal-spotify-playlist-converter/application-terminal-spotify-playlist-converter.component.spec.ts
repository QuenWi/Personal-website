import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTerminalSpotifyPlaylistConverterComponent } from './application-terminal-spotify-playlist-converter.component';

describe('ApplicationTerminalSpotifyPlaylistConverterComponent', () => {
  let component: ApplicationTerminalSpotifyPlaylistConverterComponent;
  let fixture: ComponentFixture<ApplicationTerminalSpotifyPlaylistConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationTerminalSpotifyPlaylistConverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationTerminalSpotifyPlaylistConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
