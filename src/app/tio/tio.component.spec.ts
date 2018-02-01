import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TioComponent } from './tio.component';

describe('TioComponent', () => {
  let component: TioComponent;
  let fixture: ComponentFixture<TioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
