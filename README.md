# cat-world

### Context
    1) Sign up and create an API key at
    https://thecatapi.com/

    2) Create an app that retrieves some data from one
    of the cat API endpoints (of your choice) and
    renders it on a web page. (Be creative!) You can
    use language/framework that you are most
    comfortable with.


### Run Application

```
SERVER SIDE
- Clone the repo - https://github.com/robinucar/cat-world
- cd server
- Run node server.js

CLIENT SIDE
- cd client
- Run npm start

```

## USER STORIES

### User Story 1
As a user,
So that I can reed all cat breeds,
I would like see the list of cat breeds with images.

### User Story 2
As a user,
So that I can see cat breeds features,
I would like to be able to see the details of each breed.

### User Story 3
As a user,
So that I can see my cat breed features,
I would like to be able to filter cat breads.

### User Story 4
As a user, 
So that I can reach more information about breeds easily,
I woluld like to be able to see more information about breed.


## Improvements

### Testing
I can write unit tests for app using JEST and React Testing Library

### Styling 
I can use some css framework such as Bootstrap, Material UI

### Server Side 
I can refactor server js file. Rout logic can go route file, controller logic (req data usage, response wrap, and send) can stay in controller file , and an ApiService class can do api call to thecats API.

I can add user authentication. 

I can also make post, put, delete requests to thecats API. This requests give me chance to upload cat images and details, and also will be able to edit  uploaded data.



### Client Side
I can also filter data by character, dog frient, child friend etc,
I can create pagination. 
I can create an ApiKey and will be able to upload cat image and cat details. Also with Api I can wote cat features. 