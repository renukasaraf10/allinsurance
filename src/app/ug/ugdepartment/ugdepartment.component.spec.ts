import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgdepartmentComponent } from './ugdepartment.component';

describe('UgdepartmentComponent', () => {
  let component: UgdepartmentComponent;
  let fixture: ComponentFixture<UgdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgdepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
