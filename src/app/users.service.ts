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
    this.updateUsers();
   }

// Get all users
updateUsers(){
  this.api.get('users').then((users: Array<any>) =>{
    this.users = users;
    console.log(users);
  });
}
getUsers(){
  return this.users;
}
// Get Single User Record
getUser(userID: string){
// Using the 'userID' parameter, create the correct string for the api.get() function
  return this.api.get('users/' + userID);
}
}
