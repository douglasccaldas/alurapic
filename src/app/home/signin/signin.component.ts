import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    });
  }

  login() {
    console.log('vai se autenticar');
    const userName = this.loginForm.get('userName').value;
    const passWord = this.loginForm.get('passWord').value;
    this.authService.authenticate(userName, passWord)
      .subscribe(
        () => console.log('autenticado'),
        err => {
          console.log(err);
          this.loginForm.reset();
          alert('Invalid username or password');
        }
      );
  }
}
