# CS-465-Fullstack
Full Stack Development (MEAN)


## Architecture
In this project we took advantage of the MEAN stack. For development with the frontend we used Angular, HTML, and Javascript for this application.
Handlebars was also used so that we did not need repetitive HTML and made the code more readable. Angular was used for the Single Page Application(SPA).
This allowed to make a dynamic and responsive UI that could update content without reloading the page.


For the backend we chose to use Express with Node.js Node is used as a runtime environment while Express serves as the server-side framework. Express is used to help with handling routes,
middleware and the creation of APIs. For the DB we used MongoDB this is helpful because MongoDB works well with JSON structures well. The way this works is that MongoDB will convert
JSON to BSON. Since both use key-value pairs this process is easier to use in most cases.


## Functionality
JSON is used for how we store our structured data. It is also used to help exchange data between Angular and Express. JavaScript is a scripting language. While it uses JSON
to structure the data uses it doesn't have as strict of a syntax.
** Refactored Code ** <br>
An instance of where code was refactored was as stated above when we changed some of the HTML to use Handlebars. This keeps the code cleaner while also being able to use those same
instances of HTML code blocks as well as pulling objects from the DB to display the trips and header and footer of the site. While CSS helps to style the webpage Handlebars helps by
letting us use the same code in different areas without the need to copy and paste it.


## Test
For testing this application we used the standard HTTP methods (GET, POST, PUT, DELETE) which are also the standard CRUD operations. They are structured with APIs and routes that
allowed us to use the tool Postman to manually test the endpoints to make sure they were all working correctly. For security we used JWT and developed a login page that took advantage of
the JWT authentication. This made it to where only authorized users could use see and edit the trips on the Admin page.


## Reflection
While there is still much more to learn about Fullstack development this has given me a foundational understanding of what to work toward. By continued practice, and using the
skills that I have learned such as creating routes, controllers, and other essential web development topics I stand a better chance of succeeding in finding a career in fullstack.
