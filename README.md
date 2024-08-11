Steps to run this app.

- Setup the environment (Python, Django)
- Clone this repository
- cd into the project root and start the Django App
  - Install the pyton dependencies from requirements.txt
  - Run the migrations: python manage.py migrate
  - Run the server: python manage.py runserver

There is also a front end that is created using React
Steps to run the React app
- Setup Node
- cd into the react project folder (team_fe) and start the frontend
  - Install node modules: npm install
  - Build app: npm run build
  - Run app: npm start

### TODO

- [x] Create separate pages for creating and editing team members. (currently using popup form)
- [x] Add functionality for update and delete
- [ ] Add team member profile picture to model and UX
- [ ] Improve the general overall styling of the pages (mainly element alignments)
- [ ] Error handling
- [ ] Test cases
