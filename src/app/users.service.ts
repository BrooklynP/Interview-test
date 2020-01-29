import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // Publicly accessable store of the users
public users = [];

  constructor(private api: ApiService) {
    // Get users when we start the service
    this.getUsers();
   }

// Get all users
getUsers(){
  this.api.get('users').then((users: Array<any>) =>{
    this.users = users;
  });
}
// Get Single User Record
getUser(userID: string){
// Using the 'userID' parameter, create the correct string for the api.get() function
  return this.api.get('...');
}
}
