import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubLinkedInComponent } from './git-hub-linked-in.component';

describe('GitHubLinkedInComponent', () => {
  let component: GitHubLinkedInComponent;
  let fixture: ComponentFixture<GitHubLinkedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GitHubLinkedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitHubLinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
