import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Contact }    from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //retreving Contacts
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res=>res.json)

  }

  //add contact 
  addContact(newContact) //passing newContact as argument
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact, {headers: headers})
    .map(res=>res.json());
  }

  //delete contact
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contacts'+id)
    .map(res => res.json());
  }

}
