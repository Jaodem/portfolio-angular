import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-aboutad',
  templateUrl: './aboutad.component.html',
  styleUrls: ['./aboutad.component.css']
})
export class AboutadComponent implements OnInit {

  descripcion : string = '';
  encabezado : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.descripcion = data.descripcion;
      this.encabezado = data.encabezado;
    })
  }

}
