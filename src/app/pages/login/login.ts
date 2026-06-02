import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  login = {
  mobile: '',
  password: '',
  code: ''
};

errors = {
  mobile: '',
  password: ''
};

loginError = '';

loginUser() {
  console.log(this.login);
}
}
