import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombreLettres(CSSClass) {
    if (CSSClass === 'parfait')
      return true;
  }

  header = 'CRM';
  titre = 'Gestion des relations clients';
  person = 'Tatum';
  colorbackground = 'gray';
  textAlign = 'center';

  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }

  changeAlign() {
    if (this.textAlign === 'center')
      this.textAlign = 'left';
    else
      this.textAlign = 'center';
  }
}
