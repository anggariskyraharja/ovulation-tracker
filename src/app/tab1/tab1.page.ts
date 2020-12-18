import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  date: Date;
  cycle: number;
  result1: string;
  nextperiod: Date;

  constructor(public alertController: AlertController) {
  }

  check1(event){
    this.date = event.target.value;
  }

  clear(){
    this.cycle = null;
    this.result1 = null;
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  calculate(){
    if (this.cycle == null || this.date == null){this.presentAlert1()}
    else {
      this.nextperiod = new Date (this.date.getFullYear(), this.date.getMonth(), this.date.getDate()+9);
    }
  }   
}
