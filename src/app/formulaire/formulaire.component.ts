import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  private ctctService: ContactService;
  private contacts: Contact[];

  first_name = '';
  last_name = '';
  email = '';
  gender = '';
  company = '';

  constructor(private contctService: ContactService) { 
    this.ctctService = contctService;
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
