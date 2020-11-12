import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScrumboardmasterComponent } from './scrumboardmaster.component';

describe('ScrumboardmasterComponent', () => {
  let component: ScrumboardmasterComponent;
  let fixture: ComponentFixture<ScrumboardmasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumboardmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumboardmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
