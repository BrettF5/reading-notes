## Readings: React and Forms

---

### How to use Forms in React

1\. What is a ‘Controlled Component’?

Key characteristics of controlled components include:
State Control
Event Handlers
Reactivity

2\. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

For straightforward forms, an uncontrolled approach is suitable. However, as the form's complexity grows, involving additional requirements such as state management, transitioning to a controlled form becomes necessary.


3\. How do we target what the user is entering if we have an event handler on an input field?
`event` by examining this object and extracting the value from the form

---

### The Conditional (Ternary) Operator Explained

1\. Why would we use a ternary operator?
It shortens the code as the example below to a single line, instead of using a conditional (if-else) statement.  You can also use ternary operator to run more than one operations by separating the operations with a comma. 

2\. Rewrite the following statement using a ternary statement:

```
if(x===y){
  console.log(true);
} else {
  console.log(false);
}
```


```console.log(x === y ? true : false);```


---

### 

["React Bootstrap - Forms"](https://react-bootstrap.github.io/docs/forms/overview/)
