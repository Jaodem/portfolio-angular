import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modexp',
  templateUrl: './modexp.component.html',
  styleUrls: ['./modexp.component.css']
})
export class ModexpComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      cargo:['', Validators.required],
      empresa:['', Validators.required],
      inicio:['', Validators.required],
      fin:['', Validators.required],
      descripcion:['', Validators.required],
      logo:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Cargo() {
    return this.form.get("cargo");
  }

  get Empresa() {
    return this.form.get("empresa");
  }

  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin() {
    return this.form.get("fin");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get Logo() {
    return this.form.get("logo");
  }

  get CargoInvalid() {
    return this.Cargo?.touched && !this.Cargo?.valid;
  }

  get EmpresaInvalid() {
    return this.Empresa?.touched && !this.Empresa?.valid;
  }

  get InicioInvalid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinInvalid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get DescripcionInvalid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  get LogoInvalid() {
    return this.Logo?.touched && !this.Logo?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;

    if(this.form.valid) {
      alert("Todo bien ¡Enviar formulario!")
    } else {
      this.form.markAllAsTouched();
    }
  }

}
