import { ɵDomAdapter } from '@angular/common';
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
  ovulation: Date;
  intercourse1: Date;
  intercourse2: Date;
  pregnancytest: Date;
  duedate: Date;
  ovulationwindow: Date;

  constructor(public alertController: AlertController) {
  }

  clear(){
    this.cycle = null;
    this.date = null;
    this.nextperiod = null;
    this.ovulation = null;
    this.intercourse1 = null;
    this.intercourse2 = null;
    this.pregnancytest = null;
    this.duedate = null;
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

  calculate(){
    if (this.cycle == null || this.date == null){this.presentAlert1()}
    else if (this.cycle < 22 || this.cycle > 44){this.presentAlert2()}
    else {
      this.nextperiod = new Date(this.date);
      this.nextperiod.setDate(this.nextperiod.getDate()+this.cycle);
      this.ovulation = new Date(this.nextperiod);
      this.ovulation.setDate(this.ovulation.getDate()-14);
      this.intercourse1 = new Date(this.ovulation);
      this.intercourse2 = new Date(this.ovulation);
      this.ovulationwindow = new Date(this.ovulation);
      this.ovulationwindow.setDate(this.ovulationwindow.getDate()-2);
      this.intercourse1.setDate(this.intercourse1.getDate()-5);
      this.intercourse2.setDate(this.intercourse2.getDate()+2);
      this.pregnancytest = new Date(this.nextperiod);
      this.pregnancytest.setDate(this.pregnancytest.getDate()-5);
      this.duedate = new Date(this.date);
      this.duedate.setDate(this.duedate.getDate()+280-28+this.cycle);
    }
  }   
}
