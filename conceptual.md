### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
```JWT stands for JSONwebtoken. JWT is a generated token that we send back when a user is authethicated, that allows users to be accepted across different APIs.``

- What is the signature portion of the JWT?  What does it do?
```The signature portion of a JWT is a special signature thats encoded into Base64 code that verifies users that are authenticated ``

- If a JWT is intercepted, can the attacker see what's inside the payload?
```Yes they can decode the Base64 so that dont put any important info in the payload.``

- How can you implement authentication with a JWT?  Describe how it works at a high level.```After successful authentication, the server creates a JWT. A JWT is a digitally signed token that contains claims (data) about the user, such as their user ID and role. It is often signed with a secret key or a private key``

- Compare and contrast unit, integration and end-to-end tests.
```Continous Intergration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of development cycle, End-to-end testing is testing the whole application not just the one piece of code. Compare annd contrast focuses on testing certain pieces of code one by one.``

- What is a mock? What are some things you would mock?```Mock is setting certain functions for example Math.random() to always have a certain outcome so you can specifically test the functions.``

- What is continuous integration?```Continous Intergration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of development cycle,``

- What is an environment variable and what are they used for?```An environment variable is a dynamic value that can be set outside of a software application, typically at the operating system level or in a configuration file. These variables are used to configure various aspects of software behavior, store sensitive information, or provide system-level information to applications. Environment variables are accessible by programs and scripts running on the same system.``

- What is TDD? What are some benefits and drawbacks?```TDD stands for test driven development it is a certain specific type of testing that starts with writing test first that you know will fail and then writing code logic to specifically make those test pass.``

- What is the value of using JSONSchema for validation?```JSON Schema allows you to define a clear and structured way to validate JSON data. It helps ensure the integrity and correctness of data, reducing the likelihood of invalid or inconsistent data entering your application or database.``

- What are some ways to decide which code to test?```Deciding which code to test is an essential part of creating an effective testing strategy. While it's ideal to have comprehensive test coverage, it may not always be practical or necessary to test every piece of code exhaustively. Here are some ways to help you decide which code to test``

- What does `RETURNING` do in SQL? When would you use it?```RETURNING returns whatever sql query data you specify``

- What are some differences between Web Sockets and HTTP?```HTTP is a request-response protocol, which means that it follows a stateless model where a client sends a request to a server, and the server responds with a single response. After the response is sent, the connection is closed. Web Sockets provide a full-duplex, bidirectional communication channel between a client and a server. Unlike HTTP, Web Sockets allow both the client and server to send messages independently without the need for a new request-response cycle for each message.``

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?```I prefer Express over Flask personally because express uses JavaScript and i like the customization of JavaScript alittle more over Python.``
