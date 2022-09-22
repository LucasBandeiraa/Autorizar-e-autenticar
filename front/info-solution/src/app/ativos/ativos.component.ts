import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.scss']
})
export class AtivosComponent implements OnInit {
  formCadastroAtivos = new FormGroup({
    ativo: new FormControl(''),
  });

  constructor(private router: Router) {
  }

  ngOnInit(): void {}
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.formCadastroAtivos.value);
  }
  backToListAtivos(){
    this.router.navigate(["/gerentes"]);
  }

}
