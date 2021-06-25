# DinoFinder2020

DinoFinder2020 is a single page application (SPA) intended to help people (mainly kids) learn internet research skills while creating a fun collection of dinosaur "cards."  It is wiki-style and anyone can edit it (although login functionality may be added at a later date).    

This app uses a Rails API back-end with seed data and a PostgreSQL database, along with a React/Redux front-end.   

You can see the app live here: https://christopherdent.github.io/dinofinder-frontend/

## The Front End  
The front end is designed with JSX and CSS.  It uses Javascript 'fetch' requests to create, update, view or delete dinosaurs from a specific era and category.

## The Back End  

There are Rails models for era, dinosaur type, and dinosaur.  An era `has many` dinosaur types, and a dinosaur type `has_many` dinosaurs.  Rails routes follow this same pattern.  A fetch is made to the Rails API to show the dinosaurs specific to that era and category.  

The back-end is powered by Ruby on Rails 6.0.3.2.  

## How to Launch the Game in Your Local Environment

The game is stored in two separate repositories, one for the back-end and one for the front-end.  

Front-end:  https://github.com/christopherdent/dinofinder-frontend.git
Back-end:  https://github.com/christopherdent/dinofinder-backend.git

Clone both repos into the same directory and navigate to the top level of the back-end.  From there, run `bundle install` to install the required gems.  

You will also need to start a PostgreSQL database by typing `rails db:create`,   run your migrations using `rails db:migrate`.


Finally, enter `rails s` to start your local server and `npm start` in the front end directory to start the app.  
