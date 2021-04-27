import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwkComponent } from './fwk.component';

describe('FwkComponent', () => {
  let component: FwkComponent;
  let fixture: ComponentFixture<FwkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
