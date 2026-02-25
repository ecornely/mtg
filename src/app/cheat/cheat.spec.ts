import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheat } from './cheat';

describe('Cheat', () => {
  let component: Cheat;
  let fixture: ComponentFixture<Cheat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cheat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cheat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
