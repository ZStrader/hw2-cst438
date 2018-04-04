import { Component, OnInit } from '@angular/core';
import { SquadService } from '../../services/squad.service';
import { SquadMember } from '../../models/squad-member';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myname: string;
  age: number;
  address: Address;
  hobbies: string[];
  toggle: boolean;
  squadMembers: SquadMember[];

  constructor(private mySquadService: SquadService) {
  console.log('Constructor!');
  }

  ngOnInit() {
    this.myname = 'Pual';
    this.age = 10000;
    this.address = {
      street: 'bonjo',
      city: 'Heck',
      state: 'Texas'
      };
    this.hobbies = ['hobby1', 'hobby2', 'hobby3'];

    this.toggle = false;
  }

  onClick() {
    this.myname = 'New-Get';
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  onToggle() {
    if (this.toggle === false) {
      this.toggle = true;
    } else if (this.toggle === true) {
      this.toggle = false;
    }
  }

  getSquadMembers() {
    this.mySquadService.getSquad().subscribe(
      data => this.squadMembers = data
    );
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

