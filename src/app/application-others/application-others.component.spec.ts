import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOthersComponent } from './application-others.component';

describe('ApplicationOthersComponent', () => {
  let component: ApplicationOthersComponent;
  let fixture: ComponentFixture<ApplicationOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationOthersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
