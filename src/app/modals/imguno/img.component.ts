import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imguno',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  form : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      foto:['', Validators.required],
    })
  }

  ngOnInit() {
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
