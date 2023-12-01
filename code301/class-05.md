## Readings: Putting it all together

---

### React Docs - Thinking in React:

1\. What is the `single responsibility principle` and how does it apply to components?
Single Responsibility Principle states a component should ideally only do one thing. If it goes larger it should be broken down into smaller components.

2\. What does it mean to build a ‘static’ version of your application?
It is easier to start to building an application version that will render the UI from your data without introducing any interactive elements. Emphasize the visual representation before incorporating interactive features.

3\. Once you have a static application, what do you need to add?
The next step is to icorporate the interactive features for you UI.

4\. What are the three questions you can ask to determine if something is state?
("Answered from Website React.dev Think in React website")[https://react.dev/learn/thinking-in-react] 
1. Is it passed in from a parent via props? If so, it isn’t state.
1. Does it remain unchanged over time? If so, it isn’t state.
1. Can you compute it based on any other state or props in your component? If so, it definitely isn’t state!

I also found this Youtube video that goes over this as discribed in Think in React website.
("5 Steps to THINK in React and Easily Create a ReactJS App From Scratch!")[https://www.youtube.com/watch?v=YJPSR9dEQV8]

5\. How can you identify where state needs to live?
Got the answer from the above YouTube video as these answer are better than I can explain it. I also like this for my notes for future reference. 
1. Identify components that renders something based on that state.
1. Find a common owner component, a single componenet above all the componenets that need the state in the hierarchy.
1. Either the common owner or another component highter up in the hierarchy should own the state.
1. If you can't find a component where it makes sense to own the state, create a new componenent just for holding the state and add it in the hierarchy above the common owner component.

---

### Higher-Order Functions:

1\. What is a “higher-order function”?
It takes a function as a parameter or returns a function.

2\. Explore the `greaterThan` function as defined in the reading. In your own words, what is line 2 of this function doing?

```
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true
```

Line two is an arrow function. It is invoded with the value `m` and checks if that value is greater than the value of `n` provided when greaterThan was initially called


3\. Explain how either `map` or `reduce` operates, with regards to higher-order functions.

Both map and reduce are powerful higher-order functions that provide concise ways to transform or derive information from arrays.

## Things I want to know more about:

 I like to have a better understanding of High Order function as it kind of went over my head my first time through. 

