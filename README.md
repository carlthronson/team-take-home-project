Steps to run this app.

- Setup the environment (Python, Django, Node)
- Clone this repository
- cd into the project root and start the backend server
  - Install the pyton dependencies from requirements.txt
  - Run the migrations: python manage.py migrate
  - Run the server: python manage.py runserver
- cd into the react project folder and start the frontend
  - Install node modules: npm install
  - Build app: npm run build
  - Run app: npm start

### TODO

- [x] Create separate pages for creating and editing team members. (currently using popup form)
- [ ] Add team member profile picture to model and UX
- [ ] Improve the general overall styling of the pages (mainly element alignments)
- [ ] Error handling
- [ ] Test cases
