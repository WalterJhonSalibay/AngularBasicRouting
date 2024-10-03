import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomqoutedisplayComponent } from './randomqoutedisplay.component';

describe('RandomqoutedisplayComponent', () => {
  let component: RandomqoutedisplayComponent;
  let fixture: ComponentFixture<RandomqoutedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomqoutedisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomqoutedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
