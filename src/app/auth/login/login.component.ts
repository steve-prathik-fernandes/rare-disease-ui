import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    CommonModule,
    FormsModule  // ✅ Include FormsModule here
  ]
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor() {}

  login() {
    console.log("Login clicked!");
  }
}
