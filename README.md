# introduction

Delivery calculator for calculates how much a user is expected to pay for a delivery within Lagos, Nigeria.
The API is available at https://idris-delivery-calculator.herokuapp.com

# Steps to run this project:

1. Run `yarn install` command to install dependency
2. Run `yarn dev` command to run development server
3. Run `yarn test` command to run test
4. Run `yarn build` command to build
5. Run `yarn start` command to run the build file

# stack:

1. Nodejs
2. Express
3. mocha & supertest

# how it work

POST : ${URL}/api/deliver
The request body needs to be in JSON format and include the following properties:

type - either "express" or "regular" \*required
pickAddress - String \*required
dropAddress - String \*required

example:
{
"type":"regular",
"pickAddress":"tinubu square lagos island",
"dropAddress":"24 hundry street yaba lagos"
}
