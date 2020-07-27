import { Component, OnInit } from '@angular/core';

class Republica{

  nome: string;
  cidade: string;
  preco: string;
  quartos: number;
  banheiros: number;
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
        
        nome: 'Republica da Hannah',
        cidade: 'Rio de Janeiro',
        preco: 'R$230',
        quartos: 3,
        banheiros: 1,
    },
    {
        
        nome: 'Republica do Ulrich',
        cidade: 'São Paulo',
        preco: 'R$300',
        quartos: 4,
        banheiros: 2,
    },
    {
       
        nome: 'Republica do Mikkel',
        cidade: 'Guarujá',
        preco: 'R$800',
        quartos: 8,
        banheiros: 4,
    }]
  }

}
