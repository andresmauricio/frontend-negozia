import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/users.service';
import { User } from 'src/app/models/Users';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  public users: User;
  public load = true;

  constructor(private userServices: UsersService) { }

  private getUser(): void {
    this.userServices.getUsers().subscribe((response: any) => {
      this.load = false;
      this.users = response.users;
    })
  }
  
  ngOnInit(): void {
    this.getUser();
  }

}
