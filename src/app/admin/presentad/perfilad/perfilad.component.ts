import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-perfilad',
  templateUrl: './perfilad.component.html',
  styleUrls: ['./perfilad.component.css']
})
export class PerfiladComponent implements OnInit {

  nombre : string = '';
  apellido : string = '';
  ocupacion : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.ocupacion = data.ocupacion;
    })
  }

}
