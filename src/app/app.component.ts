import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  });
  onSubmit(form) {
    console.log(form.value);
  }
}
