import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-skillsad',
  templateUrl: './skillsad.component.html',
  styleUrls: ['./skillsad.component.css']
})
export class SkillsadComponent implements OnInit {

  constructor(private datos:ServicioService) { }

  habilidades : any = [];
  nombre : string = '';
  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.habilidades = data.habilidades;
    })
  }

}
