import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepairingComponent } from './prepairing.component';

describe('PrepairingComponent', () => {
  let component: PrepairingComponent;
  let fixture: ComponentFixture<PrepairingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepairingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepairingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
