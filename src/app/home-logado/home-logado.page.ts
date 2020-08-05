import { Component, OnInit } from '@angular/core';

class Republica{
  img:string;
  nome: string;
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

  gravarNome(){
    localStorage.sitItem('nome', 'Gabriela Mattos')
  }

  republicas: Republica[];

  constructor() { }

  handleButtonEvent(event:any){
    console.log('O evento foi recebido'); //prepara o pai para receber o evento do filho
    alert(event);
  }

  ngOnInit() {

    this.republicas = [{
      
      img:'/assets/casa1.jpg',
      nome: 'República da Manu',
      cidade: 'Rio de Janeiro',
      avaliacao: 4.8,
      precoIndividual: 500,
      precoDuplo: 400,
      precoTriplo: 370,

    },
    {
      img:'/assets/casa2.jpg',  
      nome: 'República da Gabi',
      cidade: 'São Paulo',
      avaliacao: 4.5,
      precoIndividual: 400,
      precoDuplo: 350,
      precoTriplo: 300,
    },
    {
      img:'/assets/casa3.jpg',  
      nome: 'República da Nay',
      cidade: 'Caxias',
      avaliacao: 4.3,
      precoIndividual: 300,
      precoDuplo: 200,
      precoTriplo: 100,
  
  }];

  }

}
