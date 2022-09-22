import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.scss']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro = new FormGroup({
    nomeCompleto: new FormControl(''),
    idade: new FormControl(''),
  });

  constructor(private route : Router) { }

  ngOnInit(): void {}

  onSubmit(){
        // TODO: Use EventEmitter with form value
        console.warn(this.formCadastro.value);
  }
  backToList(){
    this.route.navigate(["/clientes"])
  }

}
