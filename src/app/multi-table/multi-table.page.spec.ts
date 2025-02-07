import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiTablePage } from './multi-table.page';

describe('MultiTablePage', () => {
  let component: MultiTablePage;
  let fixture: ComponentFixture<MultiTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
