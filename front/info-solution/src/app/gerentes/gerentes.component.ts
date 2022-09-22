import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerentes',
  templateUrl: './gerentes.component.html',
  styleUrls: ['./gerentes.component.scss']
})
export class GerentesComponent implements OnInit {
  formGerente = new FormGroup({
    nome: new FormControl(''),
  });

constructor(private router: Router) {}

ngOnInit(): void {}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.formGerente.value);
}

goToRegister () {
  this.router.navigate(["/cadastro-gerentes"]);
}

}
