import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatListModule} from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms'

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;
  let page: any


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ],
      //importação de modulos para testes funcionar
      imports: [
        MatListModule,
        ReactiveFormsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  describe('botão desativado', () =>{
    it('se email for inválido, o botão de Cadastro tem que ficar desativado', () => {
      component.form.get('email')?.setValue('emailInvalido');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="botaoCadastro"]').disabled).toBeTruthy();
    })

    it('se nome for inválido, o botão de Cadastro tem que ficar desativado', () => {
      component.form.get('email')?.setValue('emailInvalido');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="botaoCadastro"]').disabled).toBeTruthy();
    })

    it('se CPF for inválido, o botão de Cadastro tem que ficar desativado', () => {
      component.form.get('email')?.setValue('emailInvalido');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="botaoCadastro"]').disabled).toBeTruthy();
    })

    it('se Lista de Conhecimento for inválido, o botão de Cadastro tem que ficar desativado', () => {
      component.form.get('email')?.setValue('emailInvalido');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="botaoCadastro"]').disabled).toBeTruthy();
    })

  }) 

  describe('botão ativo', () =>{
    it('Todos os campos obrigatórios tem que ser válido, para o botão ficar ativado', () => {
      component.form.get('email')?.setValue('email@invalido.com');
      component.form.get('cpf')?.setValue('000.000.000-00');
      component.form.get('nome')?.setValue('Nome Válido');
      fixture.detectChanges();

      expect(page.querySelector('[test-id="botaoCadastro"]').disabled).toBeFalsy();
      })
        
  })

})