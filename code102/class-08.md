# Class-08 Reading Notes: Operators and Loops
---
## What I learned:

### Expressions:
In JavaScript, expressions is a line of code that will produces a value. 
***Two types of expressions:***
1. side effects EX: `num = 10`
1. purely evaluate Ex: `let y = 10 * 2`


**Some good examples I found for to better help learn and understand:**

1. Literals:
```
"Hello World!" // String literal
25             // Numeric literal
false          // Boolean literal
```
2. Variables:
```
const y = 5;
let x = 10;
```
3. Operators:
```
let y = x + 10;     // Addition operator
let z = x * 5;      // Mulitplication operator
let a = 8 / 2;      // Dovosopm expression

```
4. Comparision Expression:
```
a <= 5              // Comparison operator (true or flase)
```

5. Function Calls:
```
function sub(x, y){
    return x - y
}

sub(10, 5)      // Funtion call expression for sub that will subtrat 10 - 5
```

### Loops:
Loops offer a way to run a block of code repeatedly as long as that condition is met.

**Two types of Loops we read about:**
1. for loop
1. while loop

***For Loop***
Will operate for a specific number of times until a specific condition check out to true.

```
for (initialization; condition; afterthought statement)
```

***While Loop***
Will operate a block of code multiple times as long as the specified condition evaluates to true.

```
while (condition){
    // Code to be executed
}
```

EX:
```
let x = 0;
while (x < 10) {
    document.write(x);
    x++;
}
```
Will output 0 through 10.


---

### What is an expression in JavaScript?
A expression in JavaScript is some code that can resolve into a value. 

### Why would we use a loop in our code?
Loops enable a way to do something in your code quickly and easily.

### When does a for loop stop executing?
Loops will run until a certin condition is meet depending on the type of loop

### How many times will a while loop execute?
A while loop will execute its statement as long as the specified condition evaluates to `true`.

---

:wave:

:point_right: Link to my Read 08 - [Operators and Loops](https://brettf5.github.io/reading-notes/code102/class-08) :point_left:
