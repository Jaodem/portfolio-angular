import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modpro',
  templateUrl: './modpro.component.html',
  styleUrls: ['./modpro.component.css']
})
export class ModproComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      proyecto:['', Validators.required],
      inicio:['', Validators.required],
      fin:['', Validators.required],
      descripcion:['', Validators.required],
      link:['', Validators.required],
      logo:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Proyecto() {
    return this.form.get("proyecto");
  }

  get Logo() {
    return this.form.get("logo");
  }

  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin() {
    return this.form.get("fin");
  }

  get Link() {
    return this.form.get("link");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  get ProyectoInvalid() {
    return this.Proyecto?.touched && !this.Proyecto?.valid;
  }

  get LogoInvalid() {
    return this.Logo?.touched && !this.Logo?.valid;
  }

  get InicioInvalid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinInvalid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get LinkInvalid() {
    return this.Link?.touched && !this.Link?.valid;
  }

  get DescripcionInvalid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
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

// Proyecto y logo del proyecto