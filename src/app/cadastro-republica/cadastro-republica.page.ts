import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

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
  photo: SafeResourceUrl;
  
  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private sanitizer: DomSanitizer) {
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

  async takePicture(){
    const image = await
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      saveToGallery: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo =
    this.sanitizer.bypassSecurityTrustResourceUrl
    (image && (image.dataUrl));
  }

}
