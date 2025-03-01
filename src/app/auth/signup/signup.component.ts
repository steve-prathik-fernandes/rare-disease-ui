import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [
    CommonModule,
    FormsModule  // ✅ Include FormsModule here
  ]
})
export class SignupComponent {
  user = { username: '', email: '', password: '' };
  errorMessage = '';

  constructor() {}

  signup() {
    console.log("Signup clicked!");
  }
}
