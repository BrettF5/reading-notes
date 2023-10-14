# Class-07 Reading Notes: Programming with JavaScript


---  

##  What I learned:

### Control Flow:

*Control Flow* allows you to program the order in which your code is excuted.  This will allow you to control the flow on how your JavaScript program  will work within HTML website. Allowing it to execute specific code blocks under certain conditions or repeatedly excuted code blocks. 

**Condition statements:** Allows you to excute different code based on specified conditions.

- 'if'
- 'else if'

**Loops:** Will repeatedly execute a block of code as long a specific condition is met.

- 'for'
- 'while'
- 'do-while'

**Switch Statement:** Will allow you to perform different actions based on different conditions.  ***Note for my self for furture learning on this type***


### Fuctions:
A command, A rule, template that when invoked will preform a certain step or function. 

Antomy of a function

```
// Functiond Declaration
function grab(){
    executable code
}

// Calling or invoking function
grab();
```

**Example:**
```

function minusTwoNumbers(num1, num2){
    let sum = num1 - num2;

    return sum;
}

let mySum = minusTwoNumbers(15, 5);

document.write('sum is: ', mySum);
```

**Function Expression:**
When you first declare a variable then assign a value of a function expression.

```
let myNewFunction = function(){
    document.write('This is a function expression');
}

myNewFunction();
```

Any variable you define inside a function only live inside that function. It will only be availble inside that function.


---

### What is control flow?
In JavaScrip, *Control Flow* allows you to program the order in which your code is excuted.  This will allow you to control the flow on how your JavaScript program  will work within HTML website. Allowing it to execute specific code blocks under certain conditions or repeatedly excuted code blocks. 

### What is a JavaScript function?

In JavaScript, a function is a reusable block of code that performs a specific task or a set of tasks. Functions are a fundamental building block in JavaScript and are used for organizing and structuring code. They allow you to group statements together, name the group, and use the group of statements by invoking the function's name.

### What does it mean to invoke - or call - a function?
Calling or invokig a funtion will run the code that inside the called funtion.  To define a function, you create a reusable block of code and to make use of this funciton you'll need to invoke/call that function. It will allow you to execute that funtion when you need to without having to rewrite that specific code each time.

### What are the parenthesis () for when you define a function?
It is used for defining parameters for a function which you will place inside the parentheses()

---

:wave:

:point_right: Link to my Read 07 - [Programming with JavaScript](https://brettf5.github.io/reading-notes/code102/class-07) :point_left:

