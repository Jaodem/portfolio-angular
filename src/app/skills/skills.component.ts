import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades : any = [];
  nombre : string = '';
  constructor(private datos:ServicioService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.habilidades = data.habilidades;
    })
  }

}
