import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDidntFoundComponent } from './i-didnt-found.component';

describe('IDidntFoundComponent', () => {
  let component: IDidntFoundComponent;
  let fixture: ComponentFixture<IDidntFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDidntFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDidntFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
