import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-tio',
  templateUrl: './tio.component.html',
  styleUrls: ['./tio.component.css']
})
export class TioComponent implements OnInit {

  constructor() { }
  @Input() indice:number = 0;
  ngOnInit() {
  }

}
