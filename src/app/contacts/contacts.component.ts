import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({ transform: 'translateY(-100px)', opacity: 0 }),
        animate('1000ms ease-in-out')
      ]
      ),
    ])
  ],
  // providers: [
  //   ContactsService
  // ]
})
export class ContactsComponent implements OnInit {
  private ctctService: ContactsService;
  private contacts: Contact[];

  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  company = '';

  constructor(private contactsService: ContactsService) {
    this.ctctService = contactsService;
    this.contacts = this.ctctService.getAllContacts();
  }

  ngOnInit() {
  }


  addContact() {
    //console.warn(this);
    this.ctctService.addContact(this);
    //console.warn(this);
    this.clearContact();
  }

  private clearContact() {

    // pour avoir un formulaire propre
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.gender = '';
    this.company = '';
    //console.warn(this);
  }
}
