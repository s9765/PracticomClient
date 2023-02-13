import { Component, OnInit } from '@angular/core';
import Person from 'src/Models/Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-diretions',
  templateUrl: './diretions.component.html',
  styleUrls: ['./diretions.component.scss']
})
export class DiretionsComponent implements OnInit {
  myPerson: Person;
  constructor(public personService: PersonService) {
    this.myPerson = personService.myPerson;
  }
  ngOnInit(): void {
  }
}
