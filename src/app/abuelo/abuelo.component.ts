import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent implements OnInit {
  @Input() indice: number=0;
  constructor() { }

  onEdit(indiceEdit:number){
    this.indice = indiceEdit; 
  }
  ngOnInit() {
  }


}
