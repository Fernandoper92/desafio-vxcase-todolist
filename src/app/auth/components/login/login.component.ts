import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  incorretCredentials = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.incorretCredentials = false;
      const username = this.form.get('username').value;
      const password = this.form.get('password').value;
      if (username === 'admin' && password === 'admin') {
        this.authService.login(this.form.value);
      } else {
        this.incorretCredentials = true;
      }
    }
  }

}
