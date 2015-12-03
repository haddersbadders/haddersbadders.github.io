
#A longform template

[A demo of the template can be found here.](http://haddersbadders.github.io/longform/)

This template is in the style of a lonform page. The longform style strips out web page furniture such as header, nav, sidebar etc and puts the focus on content with full width images, large type and headers.

##Structure

The structure is really quite simple: Content is broken down into sections using the HTML tag ```<section>```.

There are two types of ```<section>```that are differentiated using two different class names:

- A content section, using the class name **content**
- A header section, that uses the class name **img_container**

###Examples

When you want a header section, use:

```<section class="img_container">
  //Content here
  </section>```

When you want some content, add:

```<section class="content"> //Some content </section> ```

##The content section
The content section is used to put text and inline images in. Content in this section has a width of 60% and is centred. This is controlled by the **.content** selector in CSS.

You can add additional classes to your content sections for further styling. For example changing the background colour:

```<section class="mountains content">``` 
with the CSS of 
``` .mountains {background: #CCD9E1; }```

