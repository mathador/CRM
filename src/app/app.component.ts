import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from './services/contacts.service';

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
      })),
      transition('active <=> inactive', animate('500ms 100ms ease-in-out')),
    ])
  ]
})
export class AppComponent {
  contacts: any;

  // constructor(contactsColl: ContactsService){
  //   contactsColl.getAllContacts().subscribe(col=>{
  //     this.contacts = col;
  //   })
  // }

  nombreLettres(CSSClass) {
    if (CSSClass === 'parfait')
      return true;
  }

  person = 'Tatum';
  colorbackground = 'gray';
  buttonState = true;
  
  showSpinner = false;
  
  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }

}
