[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
Write your answer here or in a separate js file.

Data Model:
User
- ID number
- First Name
- Last Name
- Age
- List of email addresses

Email Service Provider
- ID Number
- Email Address
- Password
- Emails
- Folders

Javascript Objects: 

const user = {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  list of emails: [ ]
}

const emailProvider = {
  id: number,
  email address: string,
  password: string,
  emails: [ ],
  folders: [ ]
}

Relationships:

const user = {
  id: 12344,
  firstName: "Jerry",
  lastName: "Seinfeld",
  age: 70,
  emailProviders: [ 
    gmail {
      emailAddress: "jerry@gmail.com",
      password: "password1",
      emails: [],
      folders: []
    }
  ]
}


### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
Write your answer here or in a separate js file.
Data Model:

User
- ID Number
- Username
- Password
- Preferences by genre
- Preferred stations

Radio Station
- ID Number
- Name
- Channel
- Genre
- Songs
- Playlists

Javascript Object
const user = {
  id: number,
  username: string,
  password: string,
  genrePreferences: [],
  preferredStations: []
}

const station = {
  id: number,
  name: string,
  channel: number,
  genre: string,
  songs: [],
  playlists: []
}

Relationships

const user = {
  id: 1234,
  username: "jerrys",
  password: "password1",
  genrePreferences: ['rock', 'rap'],
  preferredStations: [{
    stationName: "NPR",
    channel: 90.1,
    genre: "news",
    songs: [],
    playlists: []
  }]
}

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
Write your answer here or in a separate js file.
Data Model:

User
- ID
- Username
- Password
- Favorite Bands

Bands
- ID
- Name
- Genre
- Tour dates

Javascript Object:

const user = {
  id: number,
  username: string,
  password: string,
  favoriteBands: []
}

const bands = {
  id: number,
  name: string,
  genre: string,
  tourDates: number
}

Relationships

const user = {
  id: 1234,
  username: "jerryseinfeld",
  password: "password1",
  favoritaBands: [{
    name: "Queen",
    genre: "classic rock",
    tourDates: 9/1,
  }]
}


### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

Data model:

User
- ID
- Username
- Password
- Location
- List of coffeeshops

Coffeeshop
- ID
- Menu
- Location
- Items purchased

Shopping Cart
- ID
- Items
- Total
- Past orders

Javascript Object:
const user = {
  id: number,
  username: string,
  password: string,
  location: string,
  coffeeshopList: []
}
const coffeeshop = {
  id: number,
  menuItems: [],
  location: string,
  itemsPurchased: []
}
const shoppingCart = {
  id: number,
  items: [],
  total: number,
  pastOrders: []
}

Relationships:
const user = {
  id: 1234,
  username: 'jerrysienfeld',
  password: 'password1',
  location: 'address',
  coffeeshopList: [{
    menuItems: ['coffee', 'latte', 'capuccino'],
    location: 'address',
    itemsPurchased: [{
      items: [],
      total: 10.50,
      pastOrders: []
    }]
  }]
}


### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
Write your answer here or in a separate js file.
Data Model: 

User
- ID
- Username 
- Password
- Favorite Teams

Favorite Teams 
- ID
- Players
- Games
- Player Stats
- Team Stats

Players
- Name
- Stats

Javascript Object:

const user = {
  id: number,
  username: string,
  password: string,
  favoriteTeams: []
}
const favoriteTeams = {
  id: number,
  name: string,
  players: [],
  games: [],
  playerStats: [],
  teamStats: []
}
const player = {
  name: string,
  stats: []
}

Relationships
const user = {
  id: 1234,
  username: 'jerryseinfeld',
  password: 'password1'
  favoriteTeams: [{
    teamName: 'Atlanta Falcons',
    teamStats: [],
    playerStats: [{
      name: 'Matt Ryan',
      starts: ['MVP', ...]
    }],
  }]
}

### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

- I had to think about how these items are connected and what the best way to connect them was. 

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add a link to the slack channel theme along with your name and you comfort level with the homework.
