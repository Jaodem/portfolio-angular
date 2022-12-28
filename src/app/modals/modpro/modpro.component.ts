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

  get ProyectoInvalid() {
    return this.Proyecto?.touched && !this.Proyecto?.valid;
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

// Proyecto y logo del proyecto