import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loginService.isAuthenticate(token).subscribe((res) => {
        console.log('🚀 ~ res', res);
        this.router.navigate(['/users'])        
      });
    }
  }

  onSubmit() {
    this.loginService
      .onLogin(this.username, this.password)
      .subscribe((res: any) => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/users'])        
      });
  }
}
