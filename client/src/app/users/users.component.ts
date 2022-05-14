import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: any;
  user = {
    name: '',
    PhoneNumber: '',
    address: '',
    state: '',
    city: '',
  };
  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAllUserData().subscribe((res: any) => {
      this.userList = res['user'].map((user: any) => {
        user.isEditable = false;
        return user;
      });
      console.log('🚀 ~ res', this.userList);
    });
  }

  addUser() {
    this.usersService.onAddNewUser(this.user).subscribe((res) => {
      this.userList.push(this.user);
    });
  }

  updateUser(user: any) {
    console.log('🚀 ~ user', user);
    this.usersService.onUpdateUserData(user).subscribe();
  }
  onDeleteUser(user: any) {
    this.usersService.onDeleteUserData(user._id).subscribe((res) => {
      this.userList = this.userList.filter((o) => o._id !== user._id);
    });
  }

  // trackByIndex(index: number, obj: any): any {
  //   return index;
  // }
}
