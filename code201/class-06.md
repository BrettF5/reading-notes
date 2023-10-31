# Readings: Problem Domain, Objects, and the DOM:

---

## JavaScript Object Basics:

1. How would you describe an object to a non-technical friend you grew up with?
An object is like a container to store stuff or vales(in JavaScript). Lets use a box for example. With nothing in it its just an empty box. We can added items with the box.  The box is the object and the items we put in it are called `Property` in JavaScript.  The Property is made of of a Key and Value.  The key item description name and the Value it the actual name.  

2. What are some advantages to creating object literals?
It is much more effient and easier to work with. 

3. How do objects differ from arrays?
Objects can store both variables and functions. It will allow you to associatie unique keys with specifice values allowing you to create more complex data stuctures. Arrays are best used for similar items.

4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
Bracket notation is useful when the property name is stored in a variable. Or if you key of the property has a space in it.
```


```


5. Evaluate the code below. What does the term `this` refer to and what is the advantage to using `this`?

```
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```

`this` is a keyword, it refers to the current object the code is written inside. In this case it would be the object "dog" and the dot notation will log the name, age. It enables you to use the same method definition for every object you create. 


---

Introduction To The DOM:
1. What is the DOM?
Document Object Model (DOM). It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

2. Briefly describe the relationship between the DOM and JavaScript.
DOM is not a programming language but instead is a Web WPI which is used to build websites. JavaScript is the scripting language that will collaborate with DOM so a developer can make dynamic, interactive and responseive webpages.

---

## Things I want to know more about:
I would like to better understand why I would use bracket notation to access an object’s property instead of dot notation. Maybe for my brain it would be usefull to see somemore real world examples.