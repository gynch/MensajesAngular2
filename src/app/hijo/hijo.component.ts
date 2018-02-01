import { Component, Input,EventEmitter, Output ,OnInit} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent  implements OnInit {

  @Input() indice: number = 0;
  @Output() onEdit = new EventEmitter<number>();

  constructor() { }

  edit(indiceEdit:number){
    this.indice++;
    this.onEdit.emit(this.indice);
  }
 
  ngOnInit() {
  }

}
