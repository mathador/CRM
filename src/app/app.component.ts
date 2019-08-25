import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'CRM';
  //titre = 'Gestion des relations clients';
  contacts =[{"first_name":"Tatum","last_name":"Vernon","email":"tvernon2@lycos.com","gender":"Female","company":"Youopia"},
  {"first_name":"Anet","last_name":"Bellis","email":"abellis1@cnn.com","gender":"Female","company":"Oloo"},
  {"first_name":"Pippa","last_name":"Goymer","email":"pgoymer2@ihg.com","gender":"Female","company":"Browsecat"},
  {"first_name":"Addison","last_name":"Lawther","email":"alawther3@walmart.com","gender":"Male","company":"Yoveo"},
  {"first_name":"Anya","last_name":"Franzman","email":"afranzman4@bravesites.com","gender":"Female","company":"Twitterbeat"}];
}
