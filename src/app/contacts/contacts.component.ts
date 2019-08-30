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
  ]
})
export class ContactsComponent implements OnInit {
  private ctctsService: ContactsService;
  private contacts: Contact[];


  constructor(private contactsService: ContactsService) {
    this.ctctsService = contactsService;
    this.contacts = this.ctctsService.getAllContacts();
  }

  ngOnInit() {
  }

}
