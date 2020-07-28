import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

class Republica{
  id: number;
  nome: string;
  cidade: string;
  numero: number;
  rua: string;
  precoIndividual: number;
  precoDuplo: number;
  precoTriplo: number;
  observacao:string;
  avaliacao:number;
}

@Component({
  selector: 'app-republica',
  templateUrl: './republica.page.html',
  styleUrls: ['./republica.page.scss'],
})
export class RepublicaPage implements OnInit {

  republicas: Republica[];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async alerta(){
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Deseja favoritar essa república?',
      buttons: ['Não', 'Sim'] 
    });

    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create ({
      message: 'Seu comentário foi enviado.',
      duration: 3000
    });

    toast.present();
  }

  ngOnInit() {

    this.republicas = [{
      id: 1 ,
      nome:'Republica da dona Jô',
      cidade: 'Rio de Janeiro',
      numero: 40,
      rua: 'Estrada da Agua Grande',
      precoIndividual: 380,
      precoDuplo: 290,
      precoTriplo: 200,
      observacao:'Não aceitados cachorros!',
      avaliacao: 4.5,
    }]
  }

}
