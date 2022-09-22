import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-gerentes',
  templateUrl: './cadastro-gerentes.component.html',
  styleUrls: ['./cadastro-gerentes.component.scss']
})
export class CadastroGerentesComponent implements OnInit {
  formCadastro = new FormGroup({
    nomeCompleto: new FormControl(''),
    idade: new FormControl(''),
  });
  constructor(private router: Router) {
   }

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formCadastro.value);
  }

  backToList() {
    this.router.navigate(["/"]);
  }

}
