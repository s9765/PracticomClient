import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Child from 'src/Models/Child';
import ChildDTO from 'src/Models/ChildDTO';
import Person from 'src/Models/Person';
import PersonDTO from 'src/Models/PersonDTO';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  routeUrl = environment.baseUrl;
  myPerson: Person = { FirstName: null, LastName: null, Tz: null, DateOfBirth: null, Gender: null, HMO: null };
  constructor(public http: HttpClient) { }
  getAllChildren() {
    console.log(this.routeUrl);
    return this.http.get<Child[]>(`${this.routeUrl}/child`);
  }
  addChild(c: Child) {
    return this.http.post<ChildDTO>(`${this.routeUrl}/child`, c);
  }
  addPerson(p: Person) {
    return this.http.post<PersonDTO>(`${this.routeUrl}/person`, p);
  }
}
