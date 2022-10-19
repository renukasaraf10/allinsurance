import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacomeComponent } from './datacome.component';

describe('DatacomeComponent', () => {
  let component: DatacomeComponent;
  let fixture: ComponentFixture<DatacomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
