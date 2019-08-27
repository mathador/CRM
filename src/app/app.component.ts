import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('headerAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      }))
      
    ])
  ]
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
  buttonState = true;

  showSpinner = false;
  headerState = 'inactive';

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

  animateHeader() {
    //this.buttonState = !this.buttonState;
    this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive')
  }
}
