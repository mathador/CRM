import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactService {

  private contacts: Contact[];
  private ctctsService: ContactsService;

  constructor(ctctsService: ContactsService) {
    this.ctctsService = ctctsService;
    ctctsService.getAllContacts().subscribe(resp => {
      this.contacts = resp;
    });
    //console.log('appel depuis ContactsService');
  }

  addContact(contact: Contact): Contact[] {
    this.ctctsService.addContact(contact);
    return this.contacts;
  }

  clearContact(): Contact {
    return new Contact('', '', '', '', '');
  }
}
