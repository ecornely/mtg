import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLands } from './basic-lands';

describe('BasicLands', () => {
  let component: BasicLands;
  let fixture: ComponentFixture<BasicLands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
