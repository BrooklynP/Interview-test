# Interview Test Goal
Complete this web app to show a list of users, a user profile page that can be accessed by clicking on a user in the user list, and an image gallery. You can use as much or as little of the code created for you as you like, so long as these goals are achieved. Bonus points for ease of use and good UI

You will be accessing data hosted on [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com), we have created a basic API service to get you started that includes a function called 'get' that accepts a url path as a parameter and returns the data as JSON in a Promise. Feel free to use this as an Observable if you prefer.

```
get(path: string){
    return this.http.get(`https://jsonplaceholder.typicode.com/${path}`).toPromise();
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.


## Pages

The default route `/` displays a list of users, there are two buttons on the home page in `app.component`, Users and Photos. These routes have been generated and wired up to these buttons for you. The Users button returns to `/` to show the user list, the Photos button routes to `/photos` where you will create a photo gallery. Clicking on a user in the user list will need to open a user profile page and display their information.

### User List
API Route - 'users'

The user list component "user-list.component" has been generated for you

The users service "users.service" has been generated for you and imported into the user list component

Currently the user list displays the single user stored in the object 'sampleUser'. Modify the component html to loop through the users stored in the users service and create a list of users which when clicked takes you to the profile page for that user. 

You will need to put the following code into the `<a>` tag for each user to use the angular router and pass the user id as a parameter to the profile page: `[routerLink]="['/profile', user.id]"`

### User Profile
API Route - 'users/:id'
Where :id is the id of the user whos profile you are retrieving

The user profile component needs to be created: 

`ng generate component userProfile`

You will need to use the following function in the constructor or ngOnInit to retrieve the ID parameter that was passed from the user list, see this manual page for help: https://angular.io/guide/router

```
   this.route.paramMap.subscribe(params => {
      let userID = params.get("id");
    });
```

The users service needs the `getUser(userID: string)` function to be completed to return a single user, taking `userID` as a paramter



Please display the following fields on the profile page:
  - ID
  - Name
  - Username
  - Email Address
  - Website
  - Company: 
    - Catchphrase

### Photo Gallery
API Route - 'photos?albumId=1'

The photos component needs to be created:
`ng generate component photos`

The photos service needs to be created

The photos service needs to retrieve a list of photos from the api, using the url path `photos?albumId=1`to get all photos in Album 1

The photos service needs to be imported into the photos component, and a grid of all the thumbnails of the photos needs to be displayed 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

