import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStComponent } from './about-st.component';

describe('AboutStComponent', () => {
  let component: AboutStComponent;
  let fixture: ComponentFixture<AboutStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
