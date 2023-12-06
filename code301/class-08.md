## Readings: APIs

---

### API Design Best Practices:

1\. What does REST stand for?

Representational State Transfer

2\. REST APIs are designed around a ____.

`resources`

3\. What is an identifier of a resource? Give an example.
In REST, an identifier of a resource is a URI (Uniform Resource Identifier) that uniquely identifies a particular resource.
```https://api.example.com/users/123```
- This is a URL that uniquely identifies a user resource with the ID `123`. protocol (\'https\'), domain (api.example.com) and the path to the resource (/users/123)

4\. What are the most common HTTP verbs?

- GET - retrieves a representation of the resource at the specified URI. The body of the response message contains the details of the requested resource.
```GET /users/123```

- POST - creates a new resource at the specified URI. The body of the request message provides the details of the new resource. Note that POST can also be used to trigger operations that don't actually create resources.
```POST /users```

- PUT - either creates or replaces the resource at the specified URI. The body of the request message specifies the resource to be created or updated.
```PUT /users/123```

- PATCH - performs a partial update of a resource. The request body specifies the set of changes to apply to the resource.
```PATCH /users/123```

- DELETE - removes the resource at the specified URI.
```DELETE /users/123```

5\. What should the URIs be based on?
It should be based on a consisiten naming convention. Organize it in a hierarch. 

6\. Give an example of a good URI.

```https://api.example.com/v1/products/monitors/123```
- `https://api.example.com`: The base URL of the API
- `/v1`: API version
- `/products`: The resource type which is products
- `/monitors`: The category of products
- `/123`: Unique identifier for the specific monitor

7\. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing? From what I understand it in this reading, try to avoid this.  Chatty API is an API that is exposed to a large number of requests. 


**Pros of a Chatty API:** Found off of ChagGPT:

- **Granular Control:** Clients have fine-grained control over the data they request, allowing them to retrieve only the information they need.
- **Reduced Over-fetching:** Clients can minimize over-fetching of data, receiving only the fields they are interested in.

**Cons of a Chatty API:**

- **Increased Latency:** Multiple requests can result in higher latency due to the overhead of making numerous connections.
- **Higher Server Load:** Each request consumes server resources, and handling numerous requests simultaneously may lead to increased server load.
- **Complexity:** Handling a large number of requests on the client side can lead to complex and hard-to-maintain code.



8\. What status code does a successful `GET` request return?
HTTP status code 200 (OK)

9\. What status code does an unsuccessful `GET` request return?
HTTP status code 204 (No Content)

10\. What status code does a successful `POST` request return?
HTTP status code 201 (Created)

11\. What status code does a successful `DELETE` request return?
HTTP status code 204 (No Content)


### Bookmark and Review:
[RegExr](https://regexr.com/)
*note: - Pay particular attention to the cheatsheet

[Regex Tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)

[Regex 101](https://regex101.com/)


