import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  formCliente = new FormGroup({
    nome: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formCliente.value);
  }

  goToRegister() {
    this.router.navigate(["/cadastro-clientes"]);
  }

}
