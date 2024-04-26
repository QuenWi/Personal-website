import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFullStackFrontEndToDoListComponent } from './application-full-stack-front-end-to-do-list.component';

describe('ApplicationFullStackFrontEndToDoListComponent', () => {
  let component: ApplicationFullStackFrontEndToDoListComponent;
  let fixture: ComponentFixture<ApplicationFullStackFrontEndToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationFullStackFrontEndToDoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationFullStackFrontEndToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
