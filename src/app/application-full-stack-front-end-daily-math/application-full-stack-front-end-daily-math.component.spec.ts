import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFullStackFrontEndDailyMathComponent } from './application-full-stack-front-end-daily-math.component';

describe('ApplicationFullStackFrontEndDailyMathComponent', () => {
  let component: ApplicationFullStackFrontEndDailyMathComponent;
  let fixture: ComponentFixture<ApplicationFullStackFrontEndDailyMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationFullStackFrontEndDailyMathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationFullStackFrontEndDailyMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
