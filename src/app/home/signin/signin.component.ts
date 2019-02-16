import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

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
        () => this.router.navigate(['user', userName]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.userNameInput.nativeElement.focus();
          alert('Invalid username or password');
        }
      );
  }
}
