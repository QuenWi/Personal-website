import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTerminalFolderFilesManagmentComponent } from './application-terminal-folder-files-managment.component';

describe('ApplicationTerminalFolderFilesManagmentComponent', () => {
  let component: ApplicationTerminalFolderFilesManagmentComponent;
  let fixture: ComponentFixture<ApplicationTerminalFolderFilesManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationTerminalFolderFilesManagmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationTerminalFolderFilesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
