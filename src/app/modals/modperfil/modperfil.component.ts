import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modperfil',
  templateUrl: './modperfil.component.html',
  styleUrls: ['./modperfil.component.css']
})
export class ModperfilComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      profesion:['', Validators.required],
      foto:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get NombreInvalid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get Apellido() {
    return this.form.get("apellido");
  }

  get ApellidoInvalid() {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

  get Profesion() {
    return this.form.get("profesion");
  }

  get ProfesionInvalid() {
    return this.Profesion?.touched && !this.Profesion?.valid;
  }

  get Foto() {
    return this.form.get("foto");
  }

  get FotoInvalid() {
    return this.Foto?.touched && !this.Foto?.valid;
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
