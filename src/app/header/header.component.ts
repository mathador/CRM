import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    
  titre = 'Gestion des relations clients';
  header = 'CRM';
  headerState = 'inactive';
  textAlign = 'center';
  
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
