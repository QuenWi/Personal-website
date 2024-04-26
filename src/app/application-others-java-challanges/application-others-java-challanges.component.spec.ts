import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationOthersJavaChallangesComponent } from './application-others-java-challanges.component';

describe('ApplicationOthersJavaChallangesComponent', () => {
  let component: ApplicationOthersJavaChallangesComponent;
  let fixture: ComponentFixture<ApplicationOthersJavaChallangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationOthersJavaChallangesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationOthersJavaChallangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
