import { Component, OnInit } from '@angular/core';

class Republica{

  nome: string;
  cidade: string;
  avaliacao: number;
}

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  republicas: Republica[];

  constructor() { }

  ngOnInit() {

    this.republicas = [{
        
      nome: 'Republica da dona Jô',
      cidade: 'Rio de Janeiro',
      avaliacao: 4.5,

    },
    {
        
      nome: 'Republica da dona Jô',
      cidade: 'Rio de Janeiro',
      avaliacao: 4.5,
    },
    {
        
      nome: 'Republica da dona Jô',
      cidade: 'Rio de Janeiro',
      avaliacao: 4.5,
  
  }]

  }

}
