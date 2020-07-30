import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() republica;
  

  @Output() buttonPressed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  handleButton():void {
    this.buttonPressed.emit("Wooooooow");
  }

  emitEvent(): void{
    console.log('Evento emitido')
    this.buttonPressed.emit("Salva");
  }

}