import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/map';

export class ContactsService {

  private contacts: Contact[];
  private httpC: HttpClient;

  constructor(private httpCl: HttpClient) {
    this.httpC = httpCl;
  }

  getAllContacts(): Observable<any> {
    return this.httpC.get('http://localhost:1234/contacts');
  }

  addContact(contact) {
    //console.warn(this);
    this.contacts.unshift({
      first_name: contact.first_name,
      last_name: contact.last_name,
      email: contact.email,
      gender: contact.gender,
      company: contact.company
    }
    );
  }
}
