import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() republica;
  

  @Output() buttonPressed = new EventEmitter<string>(); //ao clicar um evento será emitido

  constructor() { }

  ngOnInit() {}



  emitEvent(): void{
    console.log('Evento emitido')
    this.buttonPressed.emit("O botão foi clicado!!!!");
  }

}