import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSystemSchedulerPriorityQueueComponent } from './embedded-system-scheduler-priority-queue.component';

describe('EmbeddedSystemSchedulerPriorityQueueComponent', () => {
  let component: EmbeddedSystemSchedulerPriorityQueueComponent;
  let fixture: ComponentFixture<EmbeddedSystemSchedulerPriorityQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbeddedSystemSchedulerPriorityQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbeddedSystemSchedulerPriorityQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
