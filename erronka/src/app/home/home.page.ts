import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private toastController: ToastController) {}

  async showMessage() {
    const toast = await this.toastController.create({
      message: 'Telefonoa +34 633 29 39 12, Emaila: arrigorriaga@kamp.eus',
      duration: 4000,
      position: 'bottom',
    });

    await toast.present();
  }

  ngOnInit() {
  }

}
