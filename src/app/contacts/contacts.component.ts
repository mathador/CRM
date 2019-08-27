import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

  constructor() { }

  ngOnInit() {
  }
  contacts = [{ "first_name": "Tatum", "last_name": "Vernon", "email": "tvernon2@lycos.com", "gender": "Female", "company": "Youopia" },
  { "first_name": "Anet", "last_name": "Bellis", "email": "abellis1@cnn.com", "gender": "Female", "company": "Oloo" },
  { "first_name": "Pippa", "last_name": "Goymer", "email": "pgoymer2@ihg.com", "gender": "Female", "company": "Browsecat" },
  { "first_name": "Addison", "last_name": "Lawther", "email": "alawther3@walmart.com", "gender": "Male", "company": "Yoveo" },
  { "first_name": "Anya", "last_name": "Franzman", "email": "afranzman4@bravesites.com", "gender": "Female", "company": "Twitterbeat" }];

  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  company = '';

  addContact() {
    //console.warn(this);
    this.contacts.unshift({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: this.gender,
      company: this.company
    }
    );
    //console.warn(this);
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.gender = '';
    this.company = '';
    //console.warn(this);
  }
}
