import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService{
  constructor(private http: HttpClient) {}

  onLogin(username: string, password: string) {
    const userdetails = { username, password };
    return this.http.post('http://localhost:5000/login', userdetails);
  }

  isAuthenticate(token:string) {
    const payload = {token};
    return this.http.post('http://localhost:5000/authVerify', payload);
  }
}
