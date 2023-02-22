# Blog 4 Tech Dawgs

Blog 4 Tech Dawgs is a website that allows users to create accounts, post articles, and view articles created by others. It uses the following technologies:

Express Handlebars for rendering templates
MySQL2 and Sequelize for database interaction
Dotenv for managing environment variables
Bcrypt for password hashing
Express-Session for handling user sessions
Connect-Session-Sequelize for storing session data in the database

## Installation

1. Clone the repository
git clone https://github.com/your-username/blog4techdawgs.git

2. Install the dependencies
npm install

3. Create a MySQL database and update the .env file with your database information:
DB_NAME='dog_db'
DB_USER='your-mysql-username'
DB_PW='your-mysql-password'

4. Run the application:
npm start

## Usage
Once the application is running, you can access it by visiting http://localhost:3001 in your web browser. From there, you can create an account, log in, and start creating and viewing articles.

If you are just using the application you need to follow the steps below:
1. enter information in the Signup form
2. click the signup button
3. go to your profile page then back to home to create a post.

## Screenshots

![Screenshot 2023-02-22 161450](https://user-images.githubusercontent.com/112577325/220782836-973c893e-a33f-4ff0-88a1-0007c0e6012a.png)

![Screenshot 2023-02-22 161428](https://user-images.githubusercontent.com/112577325/220782842-129e80bb-8f49-4eb6-bebd-ad529b477161.png)

![Screenshot 2023-02-22 161359](https://user-images.githubusercontent.com/112577325/220782853-e2605318-ec6a-4e20-8a60-cf28e72cae95.png)

## Contributing

please do. I need to add a delete option, and see which user is making the post. I am just crunched for time at the moment, and need to move on before getting back to it. 

## Deployed Application

https://afternoon-dawn-42896.herokuapp.com/login
