import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modabout',
  templateUrl: './modabout.component.html',
  styleUrls: ['./modabout.component.css']
})
export class ModaboutComponent implements OnInit {

  form : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      encabezado:['', Validators.required],
      texto:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Encabezado() {
    return this.form.get("encabezado");
  }

  get Texto() {
    return this.form.get("texto");
  }

  get EncabezadoInvalid() {
    return this.Encabezado?.touched && !this.Encabezado?.valid;
  }

  get TextoInvalid() {
    return this.Texto?.touched && !this.Texto?.valid;
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
