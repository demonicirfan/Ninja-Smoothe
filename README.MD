# JWT <img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" height=33px>

> What are ```express.json()``` and ```express.urlencoded()```?
- **What is Middleware?** It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.

- When talking about ```express.json()``` and ```express.urlencoded()``` think specifically about **POST** requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

- You **DO NOT NEED** ```express.json()``` and ```express.urlencoded()``` for **GET** Requests or **DELETE** Requests.

- You NEED ```express.json()``` and ```express.urlencoded()``` for **POST** and **PUT** requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (**POST** or **PUT**) Request

- Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

  - **a)** ```express.json()``` is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(```express.json()```);

  - **b)** ```express.urlencoded()``` is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(```express.urlencoded()```);

- **ALTERNATIVELY**, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for **POST** Requests (i.e. the .post request object) and/or **PUT** Requests (i.e. the .put request object).
  
```js
// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));
```

**What JWT is exactly?**
It is a token that only the server can generate, and can contain a payload of data.

**What's the point of it?**
A JWT payload can contain things like user ID so that when the client sends you a JWT, you can be sure that it is issued by you, and you can see to whom it was issued.

**Where can it be useful?**
Usually, in RESTful APIs, where the server must not use any sort of sessions.

**How does it differ from using sessions?**
In a typical session flow, the browser sends a cookie containing a token, which is then matched at the server to some data which the server makes use of to authenticate the user.

In a **JWT** flow, the token itself contains the data. The server decodes the token to authenticate the user only. No data stored on the server.

What is a typical authentication flow using **JWT**?
User credentials sent to /signin
/signin returns a **JWT**
**JWT** is stored in localStorage
**JWT** is sent on every request (to API?)
The server decrypts **JWT** and extracts user ID out of it
The server sends response given the authenticated user.

**```res.render``` vs ```res.send```**
The ```render``` method works when you have a templating engine, such as Handlebars or Jade, in use.

A templating engine is something that parses a given template file and generates HTML output. This is so you can generate an HTML web page depending on some variables in your program.

Such templates are often used with Express.js when writing applications that have a front-end.

The sendfile method, on the other hand, simply sends a given file to the client, regardless of the type and contents of the file.

Since you are using an HTML file, there is nothing particularly to be parsed by the templating engine. So, the output of render is same as that of sendfile (i.e., the HTML written in the file). Hence, both produce the same result.

