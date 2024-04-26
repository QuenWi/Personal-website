import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFullStackFrontEndPersonalWebsiteComponent } from './application-full-stack-front-end-personal-website.component';

describe('ApplicationFullStackFrontEndPersonalWebsiteComponent', () => {
  let component: ApplicationFullStackFrontEndPersonalWebsiteComponent;
  let fixture: ComponentFixture<ApplicationFullStackFrontEndPersonalWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationFullStackFrontEndPersonalWebsiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationFullStackFrontEndPersonalWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
