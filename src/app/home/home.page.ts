import { Component, OnInit } from '@angular/core';

class Republica{

  nome: string;
  cidade: string;
  avaliacao: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    republicas: Republica[];

  constructor() { }

  ngOnInit() {
    this.republicas = [{
        
        nome: 'Republica da dona Jô',
        cidade: 'Rio de Janeiro',
        avaliacao: 4.5,
    
    }]
  }

}
