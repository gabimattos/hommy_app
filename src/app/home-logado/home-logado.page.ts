import { Component, OnInit } from '@angular/core';

class Republica{
  nomeR: string;
  cidade: string;
  avaliacao: number;
  precoIndividual: number;
  precoDuplo: number;
  precoTriplo: number;
}

@Component({
  selector: 'app-home-logado',
  templateUrl: './home-logado.page.html',
  styleUrls: ['./home-logado.page.scss'],
})
export class HomeLogadoPage implements OnInit {

  republicas: Republica[];

  constructor() { }

  handleButtonEvent(event:any){
    console.log(event);
  }

  ngOnInit() {

    this.republicas = [{
        
      nomeR: 'República da Manu',
      cidade: 'Rio de Janeiro',
      avaliacao: 4.3,
      precoIndividual: 300,
      precoDuplo: 200,
      precoTriplo: 100,

    },
    {
        
      nomeR: 'República da Gabi',
      cidade: 'São Paulo',
      avaliacao: 4.5,
      precoIndividual: 400,
      precoDuplo: 350,
      precoTriplo: 300,
    },
    {
        
      nomeR: 'República da Nay',
      cidade: 'Recife',
      avaliacao: 4.8,
      precoIndividual: 500,
      precoDuplo: 400,
      precoTriplo: 370,
  
  }];

  }

}
