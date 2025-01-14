import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSystemAnalogSensorAnalysisComponent } from './embedded-system-analog-sensor-analysis.component';

describe('EmbeddedSystemAnalogSensorAnalysisComponent', () => {
  let component: EmbeddedSystemAnalogSensorAnalysisComponent;
  let fixture: ComponentFixture<EmbeddedSystemAnalogSensorAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbeddedSystemAnalogSensorAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbeddedSystemAnalogSensorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
