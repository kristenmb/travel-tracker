# Travel Tracker

A final project for Mod 2 - Design an app that can manage and track a user's travel using a provided API.

## Usage
Welcome to your personal Adventure Tracker! Upon visiting the site, a user is greated by a login screen. After entering the correct credentials, the user's dashboard appears. Users can view their yearly spending on travel, as well as upcoming, current, and past trips, and any trips that may be pending a travel agent's approval. 

Login Page to Traveler Dashboard:

![login](https://media.giphy.com/media/4fwjXPkzS7ZazhGfwS/giphy.gif)


The user is also able to book a new trip by chosing a start date, duration of trip, number of travelers, and desired destination. Once the trip is designed by the user, they can click the "Calculate Estimated Cost" button to see how much the trip will cost. The user can then book the trip and it will immediately show up in their pending and upcoming trip sections. 


Booking a new trip: 

![book a trip](https://media.giphy.com/media/X5G1g8yl8NstmWRp4h/giphy.gif)

Tablet view:

![tablet](https://media.giphy.com/media/D64QyFmJQwFrACmZG6/giphy.gif)

Mobile view: 

![mobile](https://media.giphy.com/media/1savDK7uloVo7kJAbf/giphy.gif)


## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`

5. `git clone` [this](https://github.com/turingschool-examples/travel-tracker-api) travel api repo
6. Run `npm install`
 
7. To view the site, run `npm start` in both repos

OR

Visit live site [here](https://kristenmb.github.io/travel-tracker/)

## To login to the site:
Username: traveler + any number 1 - 50 (ex: traveler36) <br>
Password: travel2020 

## Planning
I utilized GitHub Projects for project management, that board can be found [here](https://github.com/kristenmb/travel-tracker/projects/1) <br>
The detailed spec for this project can be found [here](https://frontend.turing.io/projects/travel-tracker.html) <br>

## Challenges
- I developed a testing suite for this app to ensure Travelers and Trip objects were being instantiated correctly. I would like to have explored sad path testing further and perhaps in future would attempt to design more sad paths into the classes themselves. 
- A major challenege in this project was accessing and manipulating api data correctly. After determining exactly what needed to be accessed and subsequently stored, the process seemed to make more sense.
- I found error handling on api calls to also be tricky, however, after some careful consideration, I created user friendly error handling for any bad responses. I would like to find better error handling for users upon a `.catch` firing.

## Wins
- I felt my files were organized well and make sense when reading through the code. 
- I feel I have a solid grasp on all the concepts included in the project - from the DOM manipulation and error handling, fetch calls, classes and their testing process. I was able to use iterator methods frequently and efficiently and felt I had an overall control of the project and my plan from beginning to end. 
- A definite challenege and win for me was working with the `Date` object which proved difficult but in the end made for some clean logic and fun data manipulation!


## Technologies Used
1. JavaScript (vanilla)
2. HTML
3. Sass/SCSS
3. WebPack
4. Chai & Mocha
5. Local Server API

## Future Iterations
- I would like to continue on and develop the travel agent view for the app with the capability to approve or deny trip requests.  
- Expandable trip info for the user that would include flight info, hotels, rentals and a detailed itinerary for trip.
- A capability for the user to request pricing for new destinations.
- Enabling the user to requet suggested activities from the agent.
- Creating an FAQ page and About section for the app.
- Rather than displaying how much the user has spent, let them create a yearly budget for travel and display how much they have left to spend!

## Project Members
This project was designed and implemented by [Kristen Bair](https://github.com/kristenmb)
