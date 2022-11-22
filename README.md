# meraki API task 2

A node.js project to Implement meraki learn (courses) API with express in MY MQL local databse.

## Features

- API endpoints availabe as per user need
- CRUD on Courses data

## Lesson Learned

- CRUD operations with Json database locally
- Fundamentals of express : FS modules, CRUD operations and middleware
- Using the MVC (Model-View-Controller) architecture
- Database operation (SQL)

## Tech stacks

- NodeJS - JS runtime environment
- Express - The web framework used
- Postman - API testing
- SQL - Database to store course course data

## Demo

<img src="/screenShots/Screenshot1.png" width="45%"/> <img src="/screenShots/Screenshot2.png" width="45%"/>

## Helpful commands

```bash
$ git clone https://github.com/<YOUR_GITHUB_USERNAME>/merakiCourses-MVC_02
$ cd merakiCourses-MVC_02
$ npm install
$ npm run start_dev(for development)
```

## Optimizations

- Arranged and grouped all the variables, functions, middleware as per bussiness rule.
- Implemented MVC(Model-View-Controller) architecture
- Proper organized module structure.

## API Features

###### get All courses and add courses

http://127.0.0.1:3002/api/v1/courses

###### get, update,delete course with given id

http://127.0.0.1:3002/api/v1/courses/:id

###### seed some actual data into databse

http://127.0.0.1:3002/api/v1/courses/seeder

## Author

[Pranav108](https://github.com/Pranav108/)
