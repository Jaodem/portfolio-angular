import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-skiss',
  templateUrl: './skiss.component.html',
  styleUrls: ['./skiss.component.css']
})
export class SkissComponent implements OnInit {

  habilidades : any = [];
  nombre : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.habilidades = data.habilidades;
    })
  }

}
