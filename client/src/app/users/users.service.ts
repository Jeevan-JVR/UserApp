import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  onAddNewUser(userdetails) {
    return this.http.post('http://localhost:5000/users', userdetails);
  }

  getAllUserData() {
    return this.http.get('http://localhost:5000/users');
  }

  getSingleUserData(id: String) {
    return this.http.get(`http://localhost:5000/users/:${id}`);
  }

  onUpdateUserData(userdetails) {
    const { _id: id } = userdetails;
    return this.http.put(`http://localhost:5000/users/${id}`, userdetails);
  }

  onDeleteUserData(id: String) {
    return this.http.delete(`http://localhost:5000/users/${id}`);
  }
}
