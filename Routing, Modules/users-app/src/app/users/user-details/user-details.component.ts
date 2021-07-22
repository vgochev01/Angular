import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.userService.loadUser(id).subscribe(user => this.user = user);
  }

}
