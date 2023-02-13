import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Child from 'src/Models/Child';
import Person from 'src/Models/Person';
import { PersonService } from '../person.service';
import { XlService } from '../xl.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myPerson: Person;
  children: Child[] = [];
  temp: Child = { Name: null, Tz: null, DateOfBirth: null, ParentId: null };
  data = [];
  isShowChildDetails = false;
  ParentId: number;
  today = new Date();
  constructor(public personService: PersonService, public router: Router, private xlSer: XlService) {
    this.myPerson = personService.myPerson;
  }
  ngOnInit(): void {
  }
  //הוספת ב"א חדש
  add(myForm) {
    this.personService.addPerson(this.myPerson).subscribe(succ => {
      this.ParentId = succ.id;
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].ParentId = succ.id;
        this.personService.addChild(this.children[i]).subscribe();
      }
    });
    this.data.push(this.myPerson);
    for (let i = 0; i < this.children.length; i++) {
      this.data.push(this.children[i]);
    }
    this.xlSer.exportexcel(this.data)
    myForm.reset();
    this.router.navigate(["end"]);
  }
  //הוספת ילד נוסף
  addChild() {
    this.children.push(this.temp);
    this.temp = { Name: null, Tz: null, DateOfBirth: null, ParentId: null };
    this.isShowChildDetails = false;
  }
  //הצגת מילוי פרטי הילד
  addChild1() {
    this.isShowChildDetails = true;
  }
}
