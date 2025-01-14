import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedSystemComponent } from './embedded-system.component';

describe('EmbeddedSystemComponent', () => {
  let component: EmbeddedSystemComponent;
  let fixture: ComponentFixture<EmbeddedSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmbeddedSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbeddedSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
