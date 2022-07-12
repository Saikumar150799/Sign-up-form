import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sign-up';
  fname = ''
  lname = ''
  phone = ''
  email = ''
  password = ''
  pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  validEmail = false
  submitDetails = () => {
    const information = {
      firstName: this.fname,
      lastName: this.lname,
      email: this.email,
      phone: this.phone,
      password: this.password,
    }
    console.log(information)
    window.location.reload()

    
  }

  checkPattern = (email: any) => {
    if (email) {
      this.validEmail = this.pattern.test(email) ? false : true
    }
    return this.validEmail
  }

}
