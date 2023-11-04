import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAboutmeComponent } from './bio-aboutme.component';

describe('BioAboutmeComponent', () => {
  let component: BioAboutmeComponent;
  let fixture: ComponentFixture<BioAboutmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioAboutmeComponent]
    });
    fixture = TestBed.createComponent(BioAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
