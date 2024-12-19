import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErreserbakPage } from './erreserbak.page';

describe('ErreserbakPage', () => {
  let component: ErreserbakPage;
  let fixture: ComponentFixture<ErreserbakPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreserbakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
