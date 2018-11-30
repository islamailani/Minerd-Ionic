import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { VideosPage } from '../videos/videos';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [
    'Español Basico',
    'Español Intermedio',
    'Español Intenso',
    'Encuentra personas en Linea',
    'Encuentra Lugares para practicar'
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Proximamente',
      subTitle: 'Aun no esta disponible esta opcion, disculpe los inconvenientes.',
      buttons: ['OK']
    });
    alert.present();
  }
  itemSelect(item: String){
    if(item=='Español Basico'){
      this.navCtrl.push(VideosPage);
    }else if(item=='Español Intermedio'){
      this.showAlert();
    }else if(item=='Español Intenso'){
      this.showAlert();
    }else if(item=='Encuentra personas en Linea'){
      this.showAlert();
    }else if(item=='Encuentra Lugares para practicar'){
      this.showAlert();
    }
  }1084
}
