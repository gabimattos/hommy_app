import { Component, OnInit } from '@angular/core';


class Republica{

  img:string;
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

        img:'/assets/casa1.jpg',
        nome: 'Republica da Manu',
        cidade: 'Rio de Janeiro',
        avaliacao: 4.8,
    
    },
    { 
      img:'/assets/casa2.jpg',
      nome: 'Republica da Gabi',
      cidade: 'São Paulo',
      avaliacao: 4.5,
    },
    { 
      img:'/assets/casa3.jpg',
      nome: 'Republica da Nay',
      cidade: 'Caxias',
      avaliacao: 4.3,

    }];
  }

}
