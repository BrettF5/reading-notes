## Readings: Functional Programming:

---

### Functional Programming Concepts:

## I didn't have full access to this reading even after signing up. The site required payment for more access as these where the only options I was given.  It look like I was missing a bunch of info that was need for this assignment. The webpage had a log of blank lines and I could not find the answer for some of the questions below. I went and got some of my answer from ChatGPT

1\. **What is functional programming?**

— a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data — [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)

2\. **What is a pure function and how do we know if something is a pure function?**

Here are two exceptionally rigorous definition of purity:

1. It returns the same result if given the same arguments
2. It does not cause any observable side effects


3\. **What are the benefits of a pure function?**
*From ChatGPT*

Pure functions in functional programming have several benefits:

1. **Unchanging State:** Once an object is created, its state remains constant. Instead of modifying the existing object, any operation results in the creation of a new object with the desired changes.

1. **Predictable and Reliable:** Immutability leads to more predictable and reliable code because the state of an object does not change unexpectedly during the execution of a program.

1. **Simplifies Debugging:** Since the state is fixed, debugging becomes simpler. Changes to the state are localized to specific points in the code, reducing the scope of potential issues.

1. **Concurrency:** Immutable data structures are inherently thread-safe because multiple threads cannot simultaneously modify the same object. This simplifies concurrent programming.

1. **Functional Programming:** Immutability is a key concept in functional programming, where functions operate on immutable data, leading to more straightforward reasoning about code.

4\. **What is immutability?**
*From ChatGPT*
Key points about immutability in functional programming:

1. **Unchanging State:** Immutable objects have a fixed state upon creation, and this state remains constant throughout their lifetime.

1. **Creation of New Objects:** Any operation that appears to modify the object results in the creation of a new object with the updated state. The original object remains unchanged.

1. **Predictability:** Immutability leads to more predictable code because the state of an object does not change unexpectedly during the execution of a program.

1. **Simplifies Debugging:** Since the state is constant, debugging becomes simpler. Changes to the state are localized to specific points in the code, reducing the scope of potential issues.

1. **Concurrency:** Immutable data structures are inherently thread-safe because multiple threads cannot simultaneously modify the same object. This simplifies concurrent programming.

1. **Functional Programming:** Immutability is a fundamental concept in functional programming, where functions operate on immutable data, avoiding side effects and enhancing code clarity.

5\. What is Referential transparency?
*From ChatGPT*

Key characteristics of referential transparency:

1. **Deterministic:** A referentially transparent function is deterministic, meaning that it produces predictable and consistent results for a given set of inputs.

1. **No Side Effects:** The function does not have any side effects or dependencies on external state. Its behavior is entirely encapsulated by its input and output.

1. **Substitution:** The function can be replaced with its result without affecting the behavior of the program. This property enables optimizations and reasoning about code.

1. **Caching and Memoization:** Because the function's output is solely based on its input, results can be cached or memoized for performance optimization without changing the behavior of the program.

---

### Node JS Tutorial for Beginners #6 - Modules and require():

[Node JS Tutorial for Beginners #6 - Modules and require](https://www.youtube.com/watch?v=xHLd36QoS4k)

1\. What is a module?
In node.js, there are "Core Modules" and "Modules" you can creaete. A module refers to an independent file that packages a cohesive set of functionalities, promoting reusability and ease of maintenance. Each file in Node.js operates as a distinct module, and the code within a module is inherently confined to that specific module. Node.js modules can encompass functions, variables, and objects that are exportable and can be imported for use in various sections of a Node.js application.

2\. What does the word \‘require\’ do?

In Node.js, the require function serves the purpose of importing external modules into the current file

3\. How do we bring another module into the file the we are working in?

`const moduleName = require('./path/to/module');`

4\. What do we have to do to make a module available?

```
const namedFunction = () => {
    // function code
};

modelue.export namedFunction;
```

---

## Things I want to know more about:

