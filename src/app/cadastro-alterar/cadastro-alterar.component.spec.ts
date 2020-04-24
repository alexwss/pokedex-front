import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlterarComponent } from './cadastro-alterar.component';

describe('CadastroAlterarComponent', () => {
  let component: CadastroAlterarComponent;
  let fixture: ComponentFixture<CadastroAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
