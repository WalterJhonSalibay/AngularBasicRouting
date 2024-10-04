import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetotenComponent } from './onetoten.component';

describe('OnetotenComponent', () => {
  let component: OnetotenComponent;
  let fixture: ComponentFixture<OnetotenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnetotenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnetotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
