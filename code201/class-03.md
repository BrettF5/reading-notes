# Read: Class 03: HTML Lists, Control Flow with JS, and the CSS Box Model

---

## Why this topic matters to me:

***I'm really exicted to learn on how to make my website more dynamic by tying HTML, CSS and JavaScipt together with learning more things to add to a website with CSS and JavaScript.***

## Learn HTML:

1. When should you use an `unordered list` in your HTML document?
When it is unimportant for the order of the list of a collection of items. No need for a numerical ordering.

2. How do you change the `bullet style` of unordered list items?
You can change the bullet style in the following ways by using the style tag element:
- circle
- disc
- square

**In HTML:**
```<style>
        ul {
            list-style-type: disc;
        }
    </style>

    <ul>
        <li>bullet 1</li>
        <li>bullet 2</li>
        <li>bullet 3</li>
    </ul>
```

---

**In CSS:**

```
    ul {
    list-style-type: circle;
}
```

3. When should you use an ordered list vs an unorder list in your HTML document?
When the sequence of the order matters.  Use a ordered list when the sequence matters like following a certain step of instructions in numbered ordered or chronological events. Use unordered list when it does not matter on the sequence the bullets are displayed.

4. Describe two ways you can change the numbers on `list items` provided by an `ordered list`?
You can either use the `type` or `start` in the `<ol>` element.

```<ol type ="A">```

```<ol start="3">```

---

## Learn CSS:

1. Describe the CSS properties of `margin` and `padding` as characters in a story. What is their role in a story titled: “The Box Model”?
Two properties in CSS were discusing how to make a block of text in the shap of a box.
`margin` says to `padding` I can control the outside spacing of the border of an element. I can shap the outside in all four sides, top, right, bottom and left of each individually.

```
div {
    margin: 10px 10px 10px 10px; /* Sets a top margin of 10 pixels, right margin to 10 pixels, bottom margin to 10 pixels, left margin to 10 pixels
}
```

`padding` say's, without me you will not be able control the content text within the element border. I can control the layout and spaciing within the HTML element. Just as you I can control all four sides. Top, right, bottom, and left.

```
div {
    padding: 25px 25px 25px 25px; /* Sets the top padding of 25 pixels, right padding of 25 pixels, bottom padding of 25 pixels, and left padding of 25 pixels */
}
```
`padding` say's With both of us we should be able to figure out how to get to display the information in a box format.


2. List and describe the four parts of an HTML elements box as referred to by the box model.
- Margin - This is the outlying layer with the Border, Padding and Content inbtween in that order.
- Border - The border wraps around the content and padding.
- Padding - This wraps around the content as white space. 
- Content: Is the area where your content is diplayed. Within the Margin, Border and Padding.

## Learn JS:

1. What data types can you store inside of an Array?
Types I got from looking it up in ChatGP:

1. Strings
1. Numbers
1. Booleans
1. Objects
1. Functions
1. Nested Arrays
1. Null
1. Undefined
1. Mixing Data Types

When I have more time I'll go back to learn all about each type.  

2. Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
```const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];```
Yes, it is a Nested Mixing data type if I'm write. You can access values by `console.log(people[1]);` You can change which group of values by changing the number with the brackets.  Its starts at 0, so it would be `['pete', 32, 'librarian', null]` then each other sequence of values would increase by 1.

3. List five shorthand operators for assignment in javascript and describe what they do.
- `+=` Addition assignment
- `-=` Subtraction assignment
- `*=` Multiplication assignment
- `/=` Division assignment
- `%=` Remainder assignment

4. Read the code below and evaluate the last expression and explain what the result would be and why.
```
 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this
 (a + c) + b;
```
`10dog` This is what you will get while adding these together in JavaScript. (a + c) still reaserching why it will not show the bealoon value but adding a + b will change a value to a string to display the show value at the begining of this. 

5. Describe a real world example of when a conditional statement should be used in a JavaScript program.
If you want to display the life of a charater in your JavaScript game.  You can use conditional statement to make a decision on what value to display based on its health.


6. Give an example of when a Loop is useful in JavaScript.
If you want to repeat a block of code. If you want to display all values stored in a array one by one.


## Things I want to know more about
What I learned today really overload my mind as it was a lot to process. I'm really looking forward to tommorrow to see how this all works. I'll have better questions then.  