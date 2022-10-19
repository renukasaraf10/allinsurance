import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampaldataComponent } from './sampaldata.component';

describe('SampaldataComponent', () => {
  let component: SampaldataComponent;
  let fixture: ComponentFixture<SampaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampaldataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
