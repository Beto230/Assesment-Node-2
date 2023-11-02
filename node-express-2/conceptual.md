### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  A JWT is a JSON Web Token, a compact way to share information securely between parties, often used for user authentication.

- What is the signature portion of the JWT?  What does it do?
The signature is part of the JWT that ensures the token's integrity and authenticity by using a cryptographic hash.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, an attacker can see the payload if they intercept a JWT, as it's not encrypted. However, the payload's integrity is protected by the signature.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
To implement JWT authentication, a user logs in, the server creates a JWT, and the client stores it. The client sends the JWT with each request, and the server verifies it to grant access.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests check small, isolated parts of code.
Integration tests verify interactions between different components.
End-to-end tests test the entire system from a user's perspective.

- What is a mock? What are some things you would mock?
A mock is a simulated object used in testing. You might mock external services, databases, or components to isolate the code you're testing.

- What is continuous integration?
Continuous integration is a software development practice where code changes are frequently integrated into a shared repository and automatically tested to detect and fix issues early.

- What is an environment variable and what are they used for?
Environment variables are settings outside the code used to configure and customize applications, like database credentials, API keys, and configuration options.

- What is TDD? What are some benefits and drawbacks?
TDD (Test-Driven Development) is a software development approach where tests are written before code. Benefits include robust code and faster debugging, but it can be time-consuming.

- What is the value of using JSONSchema for validation?
JSONSchema provides a way to define the structure and constraints of JSON data, ensuring data consistency and helping in validation.

- What are some ways to decide which code to test?
Prioritize testing critical, complex, and frequently changing code, as well as code that handles important business logic.

- What does `RETURNING` do in SQL? When would you use it?
RETURNING in SQL is used to retrieve data from rows affected by a SQL statement (e.g., an INSERT, UPDATE, or DELETE). It's useful when you want to get the data that was modified or inserted.

- What are some differences between Web Sockets and HTTP?
Web Sockets provide full-duplex communication, while HTTP is request-response.
Web Sockets are more efficient for real-time applications, while HTTP is better suited for traditional web requests.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  There's no right answer. Personal preference depends on the project and your familiarity with the technologies. Flask is Python-based and lightweight, while Express is JavaScript-based and widely used in Node.js.
