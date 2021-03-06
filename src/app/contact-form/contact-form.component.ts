import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    {
      "id" : 1,
      "name" : "Email"
    },
    {
      "id" : 2,
      "name" : "Phone"
    }
  ]

  log(name) {
    console.log(name);
  }

  submit(form) {
    console.log(form)
  }

  constructor() { }

  ngOnInit() {
  }

}
