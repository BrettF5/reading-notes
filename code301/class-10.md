## Readings: In memory storage:

---

### Understanding the JavaScript Call Stack

1\. **What is a ‘call’?**
In JavaScript, a call refers to a function call or method invoke, you are making a call to that function.

2\. **How many ‘calls’ can happen at once?**
The Call stack operates only one operation can be process at a time. LIFO. Call stack is a single thread of execution. 

3\. **What does LIFO mean?**
LIFO stands for "Last In, First Out."

1. Last In: Imagine you're stacking plates on a table. The last plate you place on the stack is the one on top.
1. First Out: When you need to remove a plate, you take the one from the top first

4\. **Draw an example of a call stack and the functions that would need to be invoked to generate that call stack**

```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function introduceYourself() {
  const firstName = "John";
  const lastName = "Doe";
  greet(firstName + " " + lastName);
}

function main() {
  introduceYourself();
}
```

1. main() is called:
Call Stack: main

1. main() calls introduceYourself():
Call Stack: main -> introduceYourself

1. introduceYourself() declares firstName and lastName and then calls greet():
Call Stack: main -> introduceYourself -> greet

1. greet() executes and logs a message:
Call Stack: main -> introduceYourself

1. introduceYourself() completes:
Call Stack: main

1. main() completes:
Call Stack: (empty)


5\. **What causes a Stack Overflow?**

A stack overflow occurs when the call stack, which is used to keep track of function calls in a program, becomes too large and exceeds its size limit. This can happen due to various reasons, but the common cause is excessive or infinite recursion.

1. **Recursion without base case:**

If a recursive function doesn't have a proper termination condition (base case), it can keep calling itself indefinitely, leading to an ever-growing call stack.

```
function infiniteRecursion() {
  infiniteRecursion();
}

infiniteRecursion();

```

1. **Deeply nested function calls:** A program with a large number of nested function calls can also lead to a stack overflow. This could happen if a chain of function calls is too deep and exhausts the available stack space.

```
function deepCall1() {
  deepCall2();
}

function deepCall2() {
  deepCall1();
}

deepCall1();

```

1. **Infinite loops:*** A program with an infinite loop can consume stack space quickly, preventing the call stack from unwinding and leading to a stack overflow.

```
function infiniteLoop() {
  while (true) {
    // Infinite loop
  }
}

infiniteLoop();

```


[Understanding the JavaScript Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4)

---

### JavaScript error messages:

1\. **What is a ‘reference error’?**
Reference Error happens you are trying to use a variable that has not been declared yet.

2\. **What is a ‘syntax error’?**
Syntax Error occurs that happens due to error in the language of the grammar or syntax of the code.

3\. **What is a ‘range error’?**
A Range Error is an error type in JavaScript that arises when a numeric value exceeds the allowed range.

4\. **What is a ‘type error’?**
A Type Error is a type of error in JavaScript that occurs when an operation is performed on a value of an inappropriate type. In other words, it indicates that there is a mismatch between the expected and actual data type in a certain context.

5\. **What is a breakpoint?**
A BreakPoint is a spot in your code where the execution will stop or pause the program while it is running in debugging mode. It is help for troubleshooting and inspecting parts of your code. Step by Step. 

6\. **What does the word ‘debugger’ do in your code?**
You can also trigger a breakpoint by inserting a debugger statement in your code at the specific line where you want the program execution to pause.
---

### Bookmark and Review:

[JavaScript errors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
