import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradataComponent } from './pradata.component';

describe('PradataComponent', () => {
  let component: PradataComponent;
  let fixture: ComponentFixture<PradataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PradataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
