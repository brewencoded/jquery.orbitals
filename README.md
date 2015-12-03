# JQuery Orbitals
A jquery plugin to create orbiting elements around the center of a parent element

### Requirements
In order for jQuery.Orbitals to work the jQuery library needs to be linked either through CDN:

``
<script src='http://code.jquery.com/jquery-x.x.x.js'></script>
``

or local copy:

``
<script src='/path/to/jquery-x.x.x.js'></script>
``

### Installation
Include script in your document using the following line:

```
<script src='/path/to/jquery.orbitals.js'></script>
```
Optionally, include the css file. If you don't use the orbital.css file, make sure the wrapping div has a height  specified.

### Usage
Create an element and add elements inside. The inner elements will rotate based on the selector passed to the function.

Syntax: ` $('selector').orbitals({ option: value }) `

Basic Example:
index.html
```html
...
<section class="example">
    <div class="orbit-container orbit">
        <div class="orbital"></div>
        <div class="orbital"></div>
        <div class="orbital"></div>
        <div class="orbital"></div>
        <div class="orbital"></div>
    </div>
</section>
<script>
    $('.orbital').orbitals();
</script>
...
```

### Options
` duration: 'seconds' ` 
example: ` duration: '90s' `
