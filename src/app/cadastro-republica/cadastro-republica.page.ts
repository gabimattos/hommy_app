import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-cadastro-republica',
  templateUrl: './cadastro-republica.page.html',
  styleUrls: ['./cadastro-republica.page.scss'],
})
export class CadastroRepublicaPage implements OnInit {

  submitForm(form){
    console.log(form);
    console.log(form.value);
  }
  
  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      name:[null, [Validators.required, Validators.maxLength(20)]],
      precoInd:[null],
      precoDuplo:[null],
      precoTriplo:[null],
      cidade:[null, [Validators.required]],
      rua:[null, [Validators.required]],
      numero:[null, [Validators.required]],
      observacao:[null]
    });
   }

  ngOnInit() {
  }

}
