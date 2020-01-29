import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userID = params.get("id");
      this.usersService.getUser(userID).then((user)=>{
        this.user = user;
        console.log(this.user);
      });

    });
  }

  public getUser(){
    return this.user;
  }

}
