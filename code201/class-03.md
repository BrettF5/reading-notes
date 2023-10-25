# Read: Class 03: HTML Lists, Control Flow with JS, and the CSS Box Model

---

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
```ul {
    list-style-type: circle;
}```

3. When should you use an ordered list vs an unorder list in your HTML document?
When the sequence of the order matters.  Use a ordered list when the sequence matters like following a certain step of instructions in numbered ordered or chronological events. Use unordered list when it does not matter on the sequence the bullets are displayed.

4. Describe two ways you can change the numbers on `list items` provided by an `ordered list`?
You can either use the `type` or `start` in the `<ol>` element.

```<ol type ="A">```

```<ol start="3">```

---

##Learn CSS:

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
-Margin
-Border
-Padding
-Content
