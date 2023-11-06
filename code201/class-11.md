# Readings: Audio, Video, Images

---

## Reading:

### Video and Audio Content:
1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.
The first thing I remeber how it has evolved is the resoultion of the images and the quality.  Plus the slow download speed of the video or images, but that has to do with more internet speeds. The evolution of interspeed has help in the quality of images and video's by giving more through put of data. Basically more data better quality as your able to do more or see more.

Security issues have been overcome from the older technologies like Flash or Siverlight which have been resolved by new technologies like API's.

2. Describe the use of the src and controls attributes in the `<video>` element?
`src` can be used as the same was as the `<img>` element.  You'll add the path of the video to the  `src` attribute.

```<video src="video.mp4" controls></video>```

The control attribute is a boolean attribute. The `controls` enables video control.

3. Why is it important to have fallback content inside the `<video>` element?
In case the web browswer is unable to play the video or the user has impaiments that is unable to see the video.

4. Write a very short story where `<audio>` and `<video>` are characters.

---

### A Complete Guide To Grid:

1. How does Grid layout differ from Flex?
Grid layout is a two-Dimensional layout and Flex is a one-dimension layout.  Flex is for more for row or column where items just need to be aligned in either row or column.  Grid give you more precise control over the rows or columns.

2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.
Grid container is an html element in which you can apply `display: grid` property in CSS.  
Grid items are the direct children of a grid container.
Grid lines are the horizontal and vertical dividing lines that form the grid structure.

---

### Responsive Images:

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?
When you have a user using a narrow screen device like an IPhone or Andriod device.  Having a way to allow to crop the images for a narrow screen device.

2. Define the following `<img>` attributes `srcset` and `sizes`. Write an example of how they are used.

```
<img
    src="image-small.jpg"
    srcset="image-small.jpg 320w, image-medium.jpg 640w, image-large.jpg 1024w"
    sizes="(max-width: 320px) 280px, (max-width: 640px) 600px, 1000px"
    alt="Description of the image"
>

```

3. How is `srcset` more helpful for responsive images than CSS or JavaScript?

`srcset` - it will allow you to be able to provide different images files based on the users device.