import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEgComponent } from './directive-eg.component';

describe('DirectiveEgComponent', () => {
  let component: DirectiveEgComponent;
  let fixture: ComponentFixture<DirectiveEgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveEgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
