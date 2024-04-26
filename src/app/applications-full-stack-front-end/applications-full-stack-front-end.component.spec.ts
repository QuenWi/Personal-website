import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsFullStackFrontEndComponent } from './applications-full-stack-front-end.component';

describe('ApplicationsFullStackFrontEndComponent', () => {
  let component: ApplicationsFullStackFrontEndComponent;
  let fixture: ComponentFixture<ApplicationsFullStackFrontEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationsFullStackFrontEndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationsFullStackFrontEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
