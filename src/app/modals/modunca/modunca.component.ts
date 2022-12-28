import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modunca',
  templateUrl: './modunca.component.html',
  styleUrls: ['./modunca.component.css']
})
export class ModuncaComponent implements OnInit {

  form : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      titulo:['', Validators.required],
      institucion:['', Validators.required],
      ciudad:['', Validators.required],
      provincia:['', Validators.required],
      logo:['', Validators.required],
      link:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  get Titulo() {
    return this.form.get("titulo");
  }

  get Institucion() {
    return this.form.get("institucion");
  }

  get Ciudad() {
    return this.form.get("ciudad");
  }

  get Provincia() {
    return this.form.get("provincia");
  }

  get Logo() {
    return this.form.get("logo");
  }

  get Link() {
    return this.form.get("link");
  }

  get TituloInvalid() {
    return this.Titulo?.touched && !this.Titulo?.valid;
  }

  get InstitucionInvalid() {
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get CiudadInvalid() {
    return this.Ciudad?.touched && !this.Ciudad?.valid;
  }

  get ProvinciaInvalid() {
    return this.Provincia?.touched && !this.Provincia?.valid;
  }

  get LogoInvalid() {
    return this.Logo?.touched && !this.Logo?.valid;
  }

  get LinkInvalid() {
    return this.Link?.touched && !this.Link?.valid;
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