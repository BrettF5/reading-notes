# Class 01 Reading Notes: 
---
## Getting Started:
Reading *How the Web Works*, *Website Design and Process, and *JavaScript Basic*.

#### Questions:
1. Describe how HTTP sends data between computers?
HTTP will send data between computes by the client server model.

2. Describe how HTML, CSS, and JS files are “parsed” in the browser
The HTML file will often contain `<link>` elements. As your webrowser requset the HTML file it will parse the file looking for any `<link>` tags. If it finds any CSS or JavaScript links elements it will create an in-memory CSSOM sturcture for CSS and will compilie and executes the parsed JavaScript.  It will always parse the HTML file first

3. How can you find images to add to a Website?
You can use Google Images and user it for seaching images.  Be sure to check to see if the image is copyrigted. 

How do you create a `String` vs a `Number` in JavaScript?

To create a String in JavaScript you can user either single quotes (\') or double quotes (\").

**Example:**

```let myData = "Hello, Word!";```

To create a number you do not need any syntax. You just assign a value but not within quotes or it will become a string.

```let exNumber = 11; // Interger``` 

```let exNumber = 3.142; //Floating-Point number```

5. What is a Variable and why are they important in JavaScript?

A *Variable* in JavaScript is a way to store data. It basically acts as a storage container in JavaScript. Variable are important because it will give you a way to make your website do things. Like get users data, post messages.

---

## Introduction to HTML

1. What is an HTML attribute?
A HTML attribute is a way of giving an elemnt extra information on the way to display the data without showing up on the webpage content. 

2. Describe the Anatomy of an HTMl element.
HTML elements are the basic starting structure of the web page.
- Opening Tag
- Element Name
- Attributes
- Attribute Name
- Attribute Value
- Content
- Closing Tag or Self Closing tag

3. What is the Difference between `<article>` and `<section>` element tags?

An Ariticle element is more ment for a single piece of content and a Section is more for a grouping of simular content. 

4. What Elements does a “typical” website include?
- Header
- Navigation bar
- Main content
- Sidebar
- Footer

5. How does metadata influence Search Engine Optimization?

It will help search engines optimize the search result for you website by giving it keywords in the metadata, name of your website like in the `<title>`. 


6. How is the `<meta>` HTML tag used when specifying metadata?
The `<meta>` tag in HTML is used to establish the metadata about the website. Like linking a CSS file for styling or setting the character coding for the website.

---

## Miscellaneous

1. What is the first step to designing a Website?

Basically the first question you want to ask yourself when desinging a website is what are you looking to accomplish.

2. What is the most important question to answer when designing a Website?
In my opion the most important question to ask yourself is what is your vision and how your website to get thier. 

---

## Semantics
1. Why should you use an <h1> element over a <span> element to display a top level heading?
Using a `<h1>` element over a `<span>` element will ensure the content will be displayed as a top level heading. The span element will make it look like a top level heading but with no semantic value.

2. What are the benefits of using semantic tags in our HTML?
- It will help the visually impaired users to navigate the page.
- Search Engines can key off of keywords to influence the page search rankings.

## What is JavaScript?

1. Describe 2 things that require JavaScript in the Browser?

2. How can you add JavaScript to an HTML document?

- External: You can add it by external JavaScript file by linking it within 

- Inline: Adding it within the HTML element. 

- Internal: Add it by embeding it directly inside the `<script>` tag within HTML
