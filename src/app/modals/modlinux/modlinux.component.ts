import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modlinux',
  templateUrl: './modlinux.component.html',
  styleUrls: ['./modlinux.component.css']
})
export class ModlinuxComponent implements OnInit {

  form : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:['', Validators.required],
      porcentaje:['', Validators.required],
      icono:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Name() {
    return this.form.get("name");
  }

  get Porcentaje() {
    return this.form.get("porcentaje");
  }

  get Icono() {
    return this.form.get("icono");
  }

  get NameInvalid() {
    return this.Name?.touched && !this.Name?.valid;
  }

  get PorcentajeInvalid() {
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }

  get IconoInvalid() {
    return this.Icono?.touched && !this.Icono?.valid;
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