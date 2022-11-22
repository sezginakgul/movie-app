# Movie App

## Table of contents

- [Overview](#overview)
  - [Description](#description)
  - [Project Skeleton](#project-skeleton)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)



## Overview

### Description

In this project, it is aimed to display cinema posters by using the tmdb api. There is a search feature according to the entered word. If there is no open session in the app when the user clicks the button, the user is redirected to log in to the login page.If the user does not already have a site membership, the user will register by completing the form on the registration page or logging in with google. If the user logged in applicatin, the user is directed to the film details page. Authentication in the application is performed via firebase.

### Project Skeleton

```
movie-app (folder)
       public(folder)
           |----index.html 
       src (folder)
           |----app.js 
           |----app.css 
           |----index.js
           |----index.css 
           auth (folder)
                |----firebase.js
           components (folder)
                |----MovieCard.jsx
                |----Navbar.jsx
           context (folder)
                |----AuthContextProvider.jsx
           helpers (folder)
                |----ToastNotify.js
           pages (folder)
                |----Login.jsx
                |----Main.jsx
                |----MovieDetail.jsx
                |----Register.jsx
           router (folder)
                |----AppRouter.jsx
                |----PrivateRouter.jsx
```

### Screenshot

<p align="center">
<a href="https://movie-app-sezginakgul.vercel.app/"><img src="movie.gif" alt="screenshot" width="100%"></a>
</p>


### Links

- Live: [Live Website](https://movie-app-sezginakgul.vercel.app/)


### Built with

- REACT.JS
- JAVASCRİPT
- HTML5
- CSS3
- Material UI
- Firebase
- Context API
- Axios
- React Router
- Responsive Design
