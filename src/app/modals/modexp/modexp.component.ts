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
      experiencia:['', Validators.required],
      referencia:['', Validators.required],
    })
  }

  ngOnInit() {
  }

  get Experiencia() {
    return this.form.get("experiencia");
  }

  get Referencia() {
    return this.form.get("referencia");
  }

  get ExperienciaInvalid() {
    return this.Experiencia?.touched && !this.Experiencia?.valid;
  }

  get ReferenciaInvalid() {
    return this.Referencia?.touched && !this.Referencia?.valid;
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
