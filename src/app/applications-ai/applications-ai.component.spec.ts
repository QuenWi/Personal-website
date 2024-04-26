import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsAIComponent } from './applications-ai.component';

describe('ApplicationsAIComponent', () => {
  let component: ApplicationsAIComponent;
  let fixture: ComponentFixture<ApplicationsAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationsAIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationsAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
