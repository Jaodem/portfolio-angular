import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.css']
})
export class InstitucionesComponent implements OnInit {

  estudios : any = [];
  nombre : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.estudios = data.estudios;
    })
  }

}
