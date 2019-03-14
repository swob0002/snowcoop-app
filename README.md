# snowcoop-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
test
### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Login Page

⦁	Have email input, password input, sign-in button, create account button, sign-in title, as required in the Zeplin design. -DONE
⦁	Auto-focus on email input on loading. -DONE
⦁	Disable the sign-in button when all inputs are not filled. -DONE
⦁	Redirect to Create Account page when Create Account button is clicked. -DONE
⦁	Fetch a POST request to the RESTful API running locally when Sign In button is clicked (endpoint: http://localhost:3000/auth/login - state management) -DONE
⦁	Redirect to Dashboard page on successful login - state management. -DONE

Create Account Page

⦁	Have first name input, last name input, email input, password input, confirm input, next button, sign in instead button, as required in the Zeplin design. -DONE
⦁	Redirect to Login page when sign in instead button is clicked. -DONE
⦁	Fetch a POST request to the RESTful API running locally when Next button is clicked (endpoint: http://localhost:3000/auth/register) -DONE
⦁	Redirect to Dashboard page when the POST request is successful after setting the state isLogin as true and firstName as the user's first name. -DONE

Dashboard Page:

⦁	Logo, Dashboard menu, Address List menu on sidebar as required in the Zeplin design. -DONE
⦁	Default menu is Dashboard as redirected and highlighted. -DONE
⦁	Display the first name of the user for getting the state, first Name. -DONE
⦁	Address List menu will render Address List page on the router view with just page title "Address List" -DONE

Router:

⦁	Set properly with redirect path object, set default as login page -DONE
⦁	In separate file as router.js and imported into the main.js. -DONE

Store:

⦁	A separate file as store.js -DONE
⦁	Two states: isLogin as false default value, user as null default value -DONE
⦁	Updates isLogin when logging, registering in as successful -DONE
⦁	Updates user when logging, registering is successful -DONE
⦁	Have auth.service.js file created and utilize functions wrapped inside -DONE
