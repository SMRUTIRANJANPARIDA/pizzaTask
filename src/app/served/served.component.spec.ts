import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServedComponent } from './served.component';

describe('ServedComponent', () => {
  let component: ServedComponent;
  let fixture: ComponentFixture<ServedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
