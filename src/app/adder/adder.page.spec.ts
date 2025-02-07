import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdderPage } from './adder.page';

describe('AdderPage', () => {
  let component: AdderPage;
  let fixture: ComponentFixture<AdderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
