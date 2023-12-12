## Readings: CRUD

---

### [Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

1\. **In your own words, describe what each group of status code represents:**

- 100’s = These messages indicate to the client that the server has received the header part of the request and is attempting to meet the transmission requirements specified by the client.
- 200’s = They inform the client that their request has been acknowledged. In situations involving asynchronous processing of a request (status code 202), this acknowledgment doesn't necessarily imply successful processing but rather indicates that the request met all validation requirements at the time of submission.
- 300’s = They inform the client that the requested resource is no longer available at the anticipated location.
- 400’s = These represent invalid requests that a client has transmitted to a server.
- 500’s = Frequently, these indicate issues with overloaded servers or servers that are inaccessible behind proxies. However, at times, they may directly result from client requests that prompt error exceptions on the server. Such errors can be either temporary or permanent. In most cases, it is advisable for the client to attempt the same request again.

2\. **What is a status code 202?**

This status code that indicates that the request has been accepted for processing but that the processing has not been completed. 

3\. **What is a status code 308?**

This instructs the client to utilize a different URL to access the resource, advising against further use of the current URL.

4\. **What code would you use if an update didn’t return data to a client?**

204 No Content

5\. **What code would you use if a resource used to exist but no longer does?**

410 Gone

6\. **What is the ‘Forbidden’ status code?**

403 Forbidden

---

### Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

![Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)


1\. **Why do we need to pull our MongoDB database string out of our server and put it into our .env?**

From what I understand it is for security measures. Storing sensitive information, such as database connection strings or API keys, directly in the code can expose these details if the code is shared or published.

2\. **What is middleware?**

In this application it refers to a program that adds to the application outside of what is offered by the it.

3\. **What does `app.use(express.json())` do?**

It is a middleware in Express is used to parse incoming requests with JSON payloads.

4\. **What does the `/:id` mean in a route?**

`/:id` in a route defines a route parameter.

5\. **What is the difference between `PUT` and `PATCH`?**

Help from ChatGPT:
-PUT is used for full updates or creation, requiring the client to send the complete data representation.

-PATCH is used for partial updates, allowing the client to send only the modifications needed.

6\. **How do you make a default value in a schema?**

7\. **What does a `500` error status code mean?**

An unexpected condition occurred on the server

8\. **What is the difference between a status `200` and a status `201`?**
Help from ChatGPT:

**200 OK:**

The 200 OK status code indicates a successful request.
It is commonly used for standard GET requests, where the server successfully processes the request and returns the requested resource.
It may also be used for other successful request types (e.g., POST, PUT, DELETE) where the server processes the request successfully, and the response contains a representation of the current state of the target resource.

**201 Created:**

The 201 Created status code is used to inform the client that the request has been fulfilled and has resulted in the creation of a new resource.
It is typically used in response to successful POST requests where a new resource has been successfully created on the server.
The response should include a Location header that specifies the URI of the newly created resource.
---

## Things I want to know more about:

Just getting a change to build a API with Node.js, Express, & MongoDB from this video to get a better understanding from this.  I'll be doing this after this reading assingment. 