import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsTerminalComponent } from './applications-terminal.component';

describe('ApplicationsTerminalComponent', () => {
  let component: ApplicationsTerminalComponent;
  let fixture: ComponentFixture<ApplicationsTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationsTerminalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationsTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
