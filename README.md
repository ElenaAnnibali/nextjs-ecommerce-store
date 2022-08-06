# FahrRadikal

## Description
FahrRadikal is a fictional e-commerce store built as a project during the UpLeveled Web Development Bootcamp (Spring cohort 2022).
The store is not real and it not possible to purchase any product.

## Functionalities
This is a Next.js (https://nextjs.org/) project. 
It includes the following functionalities: 
- landing page
- products page displaying all products and theirin-stock availability
- single page for every product with a picture of the product, a short catchy description, a counter and a "shop now" button to add the product to the cart
NOTE: "shop now" button currently not working properly. But don't worry, I'm fixing it
- cart page --> under construction, this page needs a couple of adjustments.
- check out page
- thank you page

## Tech stack
- Next.js
- React.js
- Emotion (CSS-in-JS)
- Postgres.js
- TypeScript
- GitHub actions

## Setup

- Clone the repository with git clone <repo>
- Setup the database by downloading and installing PostgreSQL

  First, connect to the default database as administrator. If it asks for a         password, use postgres.
  
  On Windows:
  psql -U postgres
  
  On macOS:
  psql postgres
  
  On Linux:
  sudo -u postgres psql
  
- Create a user and a database by running the following lines: 

  CREATE DATABASE <database name>;
  CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
  GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
  
Then quit psql using the following command:

\q

NOTE FOR LINUX USERS: On Linux, you will also need to create a Linux system user with a name matching the user name you used in the database. It will prompt you to create a password for the user - choose the same password as for the database above.
sudo adduser <user name>

- Create a new .env file on the root of your repo --> add your .env file to the .gitignore file!
- Copy the environment variables from .env-example into .env
- Replace the placeholders xxxxx with your username, password and name of database
- Install dotenv-cli with yarn add dotenv-cli
- Run yarn install in your command line
- Run the migrations with yarn migrate up
- Start the server by running yarn dev


## Deploy on Heroku

-Sign up at Heroku: https://www.heroku.com/.
-Create a new App
-Choose a name and select the "Europe" Region
-Click "Connect to GitHub"
-Search for your repository and click on "Connect". Click on "Enable Automatic Deploys"
-Go to the Overview tab and click "Configure Add-On"
-Search for "Postgres" and select "Heroku Postgres"
-Trigger a deploy by pushing your repo to GitHub




