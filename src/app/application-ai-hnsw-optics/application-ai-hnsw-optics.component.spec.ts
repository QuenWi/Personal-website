import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationAIHNSWOPTICSComponent } from './application-ai-hnsw-optics.component';

describe('ApplicationAIHNSWOPTICSComponent', () => {
  let component: ApplicationAIHNSWOPTICSComponent;
  let fixture: ComponentFixture<ApplicationAIHNSWOPTICSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationAIHNSWOPTICSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationAIHNSWOPTICSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
