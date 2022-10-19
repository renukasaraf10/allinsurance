import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpraComponent } from './forpra.component';

describe('ForpraComponent', () => {
  let component: ForpraComponent;
  let fixture: ComponentFixture<ForpraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForpraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForpraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
