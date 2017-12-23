import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndbidComponent } from './endbid.component';

describe('EndbidComponent', () => {
  let component: EndbidComponent;
  let fixture: ComponentFixture<EndbidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndbidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
