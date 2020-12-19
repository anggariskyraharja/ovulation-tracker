import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  date: Date;
  long: number;
  cycle: number;
  nextperiod1: Date;
  lastperiod1: Date;
  nextperiod2: Date;
  lastperiod2: Date;
  nextperiod3: Date;
  lastperiod3: Date;
  nextovulation1: Date;
  nextovulation2: Date;
  nextovulation3: Date;
  lastovulation1: Date;
  lastovulation2: Date;
  lastovulation3: Date;

  constructor(public alertController: AlertController) {
  }

  clear(){
    this.cycle = null;
    this.long = null;
    this.date = null;
    this.nextperiod1 = null;
    this.nextperiod2 = null;
    this.nextperiod3 = null;
    this.lastperiod1 = null;
    this.lastperiod2 = null;
    this.lastperiod3 = null;
    this.nextovulation1 = null;
    this.nextovulation2 = null;
    this.nextovulation3 = null;
    this.lastovulation1 = null;
    this.lastovulation2 = null;
    this.lastovulation3 = null;
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'Cycle ranges from 22 to 44 days! Use 28 days if unsure.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'Duration ranges from 1 to 10 days!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  calculate(){
    if (this.cycle == null || this.date == null){this.presentAlert1()}
    else if (this.cycle < 22 || this.cycle > 44){this.presentAlert2()}
    else if (this.long < 1 || this.long > 10){this.presentAlert3()}
    else {
      this.nextperiod1 = new Date(this.date);
      this.nextperiod1.setDate(this.nextperiod1.getDate()+this.cycle);
      this.lastperiod1 = new Date (this.nextperiod1);
      this.lastperiod1.setDate(this.lastperiod1.getDate()+this.long-1);
      this.nextovulation1 = new Date(this.nextperiod1);
      this.nextovulation1.setDate(this.nextovulation1.getDate()-16);
      this.lastovulation1 = new Date(this.nextperiod1);
      this.lastovulation1.setDate(this.lastovulation1.getDate()-12);
      this.nextperiod2 = new Date(this.nextperiod1);
      this.nextperiod2.setDate(this.nextperiod2.getDate()+this.cycle);
      this.lastperiod2 = new Date (this.nextperiod2);
      this.lastperiod2.setDate(this.lastperiod2.getDate()+this.long-1);
      this.nextovulation2 = new Date(this.nextperiod2);
      this.nextovulation2.setDate(this.nextovulation2.getDate()-16);
      this.lastovulation2 = new Date(this.nextperiod2);
      this.lastovulation2.setDate(this.lastovulation2.getDate()-12);
      this.nextperiod3 = new Date(this.nextperiod2);
      this.nextperiod3.setDate(this.nextperiod3.getDate()+this.cycle);
      this.lastperiod3 = new Date (this.nextperiod3);
      this.lastperiod3.setDate(this.lastperiod3.getDate()+this.long-1);
      this.nextovulation3 = new Date(this.nextperiod3);
      this.nextovulation3.setDate(this.nextovulation3.getDate()-16);
      this.lastovulation3 = new Date(this.nextperiod3);
      this.lastovulation3.setDate(this.lastovulation3.getDate()-12);
      this.nextperiod3 = new Date(this.date);
      this.lastperiod3 = new Date(this.date);
      this.lastperiod3.setDate(this.lastperiod3.getDate()+this.long-1);
    }
  }   
}
