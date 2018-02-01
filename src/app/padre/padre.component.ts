import { Component, OnInit,Output ,Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  @Input() indice:number=0;
  
  @Output() onEditPadre = new EventEmitter<number>();
  constructor() { }
  ngOnInit() {
  }


  onEdit(indiceEdit:number){
    this.onEditPadre.emit(indiceEdit);
    this.indice = indiceEdit; 
    
  }
}
