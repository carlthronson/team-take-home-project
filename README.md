This project requires Django and optionally Node.

Steps to get, build, test and run this app.

Get:

- Clone the repo:
```git clone https://github.com/carlthronson/team-take-home-project.git```
- cd into the project root
```cd team-take-home-project/instawork```

Build:
  - Install the dependencies
        ```python -m pip install requirements.txt```
  - run the DB migrations command
        ```python manage.py migrate```

Test:
  - run the tests command
         ```python manage.py test```

Run:
  - run the server command
        ```python manage.py runserver```


There is also a front end that is created using React
Steps to run the React app
- Setup Node
- cd into the react project folder (team_fe) and start the frontend
  - Install node modules: ```npm install```
  - Build app: ```npm run build```
  - Run app: ```npm start```

### TODO

- [x] ~~Create separate pages for creating and editing team members. (currently using popup form)~~
- [x] ~~Add functionality for update and delete~~
- [ ] Add team member profile picture to model and UX
- [ ] Improve the general overall styling of the pages (mainly element alignments)
- [x] ~~Error handling~~
- [x] ~~Test cases~~
