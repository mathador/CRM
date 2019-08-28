import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/Contact';
import { ContactService } from '../services/contact.service';

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
  ]
})
export class ContactsComponent implements OnInit {
  private ctctsService: ContactsService;
  private ctctService: ContactService;
  private contacts: Contact[];

  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  company = '';

  constructor(private contactsService: ContactsService, private contctService: ContactService) {
    this.ctctsService = contactsService;
    this.ctctService = contctService;
    this.contacts = this.ctctsService.getAllContacts();
  }

  ngOnInit() {
  }


  addContact() {
    //console.warn(this);
    this.contacts = this.ctctService.addContact(this);
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
