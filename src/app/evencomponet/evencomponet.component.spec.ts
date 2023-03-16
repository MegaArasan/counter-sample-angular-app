import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvencomponetComponent } from './evencomponet.component';

describe('EvencomponetComponent', () => {
  let component: EvencomponetComponent;
  let fixture: ComponentFixture<EvencomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvencomponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvencomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
