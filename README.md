# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview
### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

I have learned and being able to implement form validations especially when there are multiple parameters to be validated.


```js
let isFormValid=isnumberValid && isBlankValid && isCvvValid;
 if(isFormValid){
    let myForm= document.getElementById('my-form');
    let complete=document.getElementById('complete');
myForm.remove();
complete.style.display="block";
 }
}
```



### Continued development

- RegEX
- Finding the right way of Naming functions and variables





## Author

- Website - [Salamah](https://salamah.netlify.com)
- Frontend Mentor - [@Salamah](https://www.frontendmentor.io/profile/Salamah-Jimoh)
- Twitter - [@Salamah](https://www.twitter.com/salamah_jimoh)



