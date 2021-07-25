import { Component } from '@angular/core';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  icons = {
    faEnvelope: faEnvelope,
    faLock: faLock,
    faPhone: faPhone,
    faUser: faUser
  };

  constructor() { }

}
