# yelpcamp 
Yelpcamp is an application that allows you to add campgrounds for other users to comment and rate, and view campgrounds added by other users.

https://anand-yelpcamp.cyclic.app/

<h1>Features</h1>
<ul>
  <li>Responsive web design (RWD)</li>
  <li>CRUD operations</li>
  <li>
    User authentication (Login/Register/Logout) and authorization
    (Post/Like/Edit)
  </li>
  <li>Flash messages responding to users' interaction</li>
  <li>RESTful API</li>
  <li>Interactive map</li>
</ul>

<h1>Specifications</h1>
<ul>
  <h2>Authentication</h2>
  <ul>
    <li>User can register and login</li>
    <li>Used Passport for that purpose</li>
  </ul>
  <h2>Authorization</h2>
  <ul>
    <li>User needs to be logged in to make any change(add,update or delete)</li>
    <li>A user can only alter his posts or reviews</li>
  </ul>
  <h2>Functionalities</h2>
  <ul>
    <li>Campgrounds are marked on a cluster map using Mapbox</li>
    <li>Images of campgrounds are uploaded to Cloudinary</li>
    <li>Images can be added and deleted after creation of Campground</li>
    <li>CRUD functions have been implemented on Campgrounds</li>
    <li>Flash messages were displayed</li>
    <li>Sessions and cookies were used</li>
    <li>Every Campground has it's location displayed seperately on a map</li>
  </ul>
</ul>

<h1>Built with</h1>
<ul>
  <h1>Front End</h1>
  <ul>
    <li>HTML, CSS, Bootsrap v5.0</li>
    <li>EJS, EJS Mate</li>
  </ul>
  <h1>Back End</h1>
  <ul>
    <li>NodeJS</li>
    <li>ExpressJS</li>
    <li>MongoDB</li>
    <li>cloudinary</li>
    <li>MapBox</li>
    <li>passport(local-strategy)</li>
    <li>JOI</li>
    <li>connect-flash</li>
    <li>morgan</li>
    <li>sessions</li>
    <li>helmet</li>
    <li>mongoSanitize</li>
    <li>sanitizeHtml</li>
    <li>Deployed using Heroku, database on MongoDB Atlas</li>
  </ul>
</ul>

