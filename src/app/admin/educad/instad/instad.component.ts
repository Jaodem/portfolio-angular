import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-instad',
  templateUrl: './instad.component.html',
  styleUrls: ['./instad.component.css']
})
export class InstadComponent implements OnInit {

  estudios : any = [];
  nombre : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.estudios = data.estudios;
    })
  }

}
