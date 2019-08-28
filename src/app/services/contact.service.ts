import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor(ctctsService: ContactsService) {
    this.contacts = ctctsService.getAllContacts();
  }

  addContact(contact: Contact): Contact[] {
    //console.warn(this);
    this.contacts.unshift({
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      gender: contact.gender,
      company: contact.company
    }
    );
    return this.contacts;
  }
}
