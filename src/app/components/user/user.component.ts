import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  hobbies: string[];

  constructor() {}

  ngOnInit() {
    this.name = "John";
    this.email = "sagun_90@hotmail.com";
    this.age = 30;
    this.address = {
      street: "402 filhiol",
      city: "Bsoton",
      state: "MA"
    };

    this.hobbies = ["write code", "watch movie"];
  }

  onClick() {
    this.name = "Sagun";
    this.hobbies.push("New Hobby");
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return false;
  }
}
