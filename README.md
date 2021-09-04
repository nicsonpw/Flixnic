
# Nicson's Netflix Clone
An ongoing project solely to enrich my knowledge of React and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.


[![Flixnic](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://netflix2-7eeb0.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/nicsonpw)



## Features

- Use the TMDB API for movie references
- Use React Router to navigate between pages
- Use of functional Sign Up and Sign In button
- Use of functional Sign Out button
- Use of clickable and functional logo and avatar
- Use Firebase as the database
- Use of functional Subscribe button using Stripe
- Use of functional payment method using Stripe




## Future plans

- Update UI/UX 
- Add trailer function


## Installation

- Create project with Redux template 
```bash
  npx create-react-app "projectname" --template redux
```

- Install Firebase
```bash
  npm i firebase@^4.8.0 --save
```

- Install Axios
```bash
  yarn add axios
```

- Install Stripe
```bash
  yarn add @stripe/stripe-js
```
- Install React Router
```bash
  yarn add react-router-dom 
```


## Deployment

To run this project:
```bash
  yarn start
```

This  will Netflix clone on your web browser.

To deploy your web, do the followings:
```bash
  firebase login
  
  firebase init
  
  npm run build
  
  firebase deploy
```

For every new updates, run these commands again:
```bash
  npm run build
  
  firebase deploy
```
By doing this, it allows us to deploy an optimized production build for our website.

## Tech Stack

**Client:** React, Redux

**Server:** Node, Firebase


