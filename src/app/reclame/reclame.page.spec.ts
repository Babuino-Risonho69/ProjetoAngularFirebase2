import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReclamePage } from './reclame.page';

describe('ReclamePage', () => {
  let component: ReclamePage;
  let fixture: ComponentFixture<ReclamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReclamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
