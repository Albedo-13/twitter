## Contents

- [Technical Task](#Technical-Task)
- [Required Functionality](#Required-Functionality)
- [Example of Graphical Presentation](#Example-of-Graphical-Presentation)
- [Used Technologies](#Used-Technologies)
- [Testing](#Testing)
- [Useful Links](#Useful-Links)

## Technical Task

Implement an application similar in functionality to the Twitter platform.

## Required functionality:

- user authorization;
- user registration;
- ability to create a new tweet;
- search for other tweets;
- validation of entered data;
- changing user data;
- changing the application theme.

### Additional instructions

- Implementation of Loader to display a backup UI when loading data;
- Using libraries for styles is prohibited;
- All user data, tweets are stored in firebase.


## Example of a graphical representation:

Link to the layout: [Layout "Twitter"](<https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=0%3A1&t=T3Vik0PUWZKXqlCN-0>).

### The project also assumes:

- Organization of the file structure of the react application. Link to the structure: [Project structure](https://github.com/mkrivel/structure);
- Adhere to the requirements for writing and organizing the code of the react application. Link to the requirements: [Requirements for the test task](https://github.com/annaprystavka/requirements);
- Deploy the application to the GitHub Pages platform or other others (Netlify, ...);
- Set up ***babel***, ***eslint*** configurations;
- Using TypeScript for typing and reducing the number of potential bugs;
- Error handling via the ***Error Boundaries*** pattern;
- Using aliases to import files;
- Optimizing the design for mobile devices;
- Covering the entire application with tests (cypress, unit);
- Mandatory animation when hovering, clicking on buttons, scrolling the carousel and sliders, the appearance of elements on the page during rendering and scrolling.

## Description of screens

1. [Sign Up](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A368&t=T3Vik0PUWZKXqlCN-0)

On this page, the user can enter their name, phone number, date of birth in order to register. All fields must be mandatory.
When clicking on "Use email" the user is redirected to the [authorization](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0) page. On this page, the user can register using a Google account or go to the [registration](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A350&t=T3Vik0PUWZKXqlCN-0)

2. [Log In](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Twitter?node-id=1%3A350&t=V0ikbnKD4YdfNcCd-0)

On this page, the user can log into their account by entering their login or phone number. If the account does not exist, notify the user about it.
By clicking on "Sign up to Twitter" the user is redirected to the [authorization](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0) page.

3. [Profile](https://www.figma.вom/file/KaвuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A58&t=T3Vik0PUWZKXqlCN-0)

The profile page displays information about the user. Clicking on edit profile opens a modal window in which you can add/change user data:
first name, last name, password, gender, telegram link.
In the "What's happening" category, you can create a new post, it is also possible to add a picture, like and delete the created tweet.
The Tweets category displays posts created by the user.
In the Search Input field, you can enter the name of the tweet and a tweet should appear in the list, clicking on which it opens in a new window.
Clicking on a Tweet (in the sidebar) opens a modal window in which you can also create a new tweet (also with the addition of an image).
It is also possible to log out of your account.

4. [Feed](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A465&t=T3Vik0PUWZKXqlCN-0)

There is an option to change the general theme of the application in the header of the page.
It is possible to create a new tweet on the page, which will be added on the current page and on the user's own page, as well as posts from other users are displayed.
In the Search for Twitter, there is a list of Twitter users (the search should take place on the firebase side and the tweets had the opportunity to like).

5. [icons](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=6%3A279&t=T3Vik0PUWZKXqlCN-0 ) contains auxiliary icons for the application.


## Technologies used

### For react

- ***node.js*** is a software platform based on the V8 engine (translating JavaScript into machine code);
- ***babel*** is a transpiler that converts code from one standard to another;
- ***eslint*** - linter for JavaScript code;
- ***Firebase*** is an application development platform that provides cloud storage, analytics and more;
- ***yarn*** - package manager;
- ***react-hook-forms*** - library for processing form input elements;
- ***styled-components*** - react component styling system;
- ***react*** - JavaScript library for creating user interfaces;
- ***typescript*** is a strongly typed language to reduce the number of potential bugs;
- ***vite*** is a module builder that allows you to compile JavaScript modules into a single JS file;
- ***cypress*** — e2e testing for web applications;
- ***jest*** — unit testing.