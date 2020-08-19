[![Codeship Status for KettyLezama/Come-Code-With-Me](https://app.codeship.com/projects/3b377aa0-b8af-0138-ba52-3e45168fbfb3/status?branch=master)](https://app.codeship.com/projects/404836)

# Come Code With Me
**Come Code With Me** is a social web application whose primary focus is to
connect new women programmers to a woman programming mentor in their area.
As a new user, upon registration, the user builds their profile and indicates
whether they would like to be a mentor or a mentee. Upon login, a mentor's 
dashboard, for instance, will display all mentees within a 10-mile radius
of them, with the help of the Google Maps API. Once the mentor peruses through
all mentee profiles, they are able to establish a connection with the profile
via the 'Connect' button at the top of the profile of interest. Once a
connection is established, the user may visit their 'Connections' tab to
initiate a conversation with their interests. From there, it is up to the
users to determine whether they are a good match and whether they would like
to meet in person.

For the deployed application, visit [here](http://come-code-with-me.herokuapp.com/).

## Author
- Ketty Lezama

## Built With
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/12/index.html)
- [Bulma CSS Framework](https://bulma.io/)

## Versions
- Ruby: 2.6.5
- Rails: 5.2.4.3
- PostgreSQL 12: 2.3.5
- Bulma: 0.9.0

###### Clone The Repository
```
git clone https://github.com/KettyLezama/Come-Code-With-Me
```

###### Create and Setup the Database
```
bundle exec rake db:setup
```

###### Run the Test Suite
```
bundle exec rspec
```

###### Start the Rails Server and Webpack-dev-server
```
bundle exec rails s
yarn run start
```

###### If making changes to mystyles.scss, run the following to update & recompile the mystyles.css file.
```
yarn css-start
```

###### The application can be accessed via <http://localhost:3000>
