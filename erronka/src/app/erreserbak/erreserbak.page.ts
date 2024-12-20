import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-erreserbak',
  templateUrl: './erreserbak.page.html',
  styleUrls: ['./erreserbak.page.scss'],
})
export class ErreserbakPage implements OnInit {

  constructor(private toastController: ToastController) {}

  async showMessage() {
    const toast = await this.toastController.create({
      message: 'Momentu honetan ezin dira erreserbarik egin.',
      duration: 4000,
      position: 'bottom',
    });

    await toast.present();
  }

  ngOnInit() {
  }
}
