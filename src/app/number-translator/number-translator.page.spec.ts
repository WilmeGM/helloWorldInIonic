import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberTranslatorPage } from './number-translator.page';

describe('NumberTranslatorPage', () => {
  let component: NumberTranslatorPage;
  let fixture: ComponentFixture<NumberTranslatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberTranslatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
