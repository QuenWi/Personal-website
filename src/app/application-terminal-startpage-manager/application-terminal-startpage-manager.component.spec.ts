import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTerminalStartpageManagerComponent } from './application-terminal-startpage-manager.component';

describe('ApplicationTerminalStartpageManagerComponent', () => {
  let component: ApplicationTerminalStartpageManagerComponent;
  let fixture: ComponentFixture<ApplicationTerminalStartpageManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationTerminalStartpageManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationTerminalStartpageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
