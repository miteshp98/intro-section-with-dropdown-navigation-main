# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [ solution URL ](https://github.com/miteshp98/intro-section-with-dropdown-navigation-main)
- Live Site URL: [ live site URL ](https://miteshp98.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project, I learned how to effectively implement a mobile-first approach and create a fluid layout that adapts seamlessly across various screen sizes. Here are the key areas I focused on:

Mobile-First Approach:

Designed the layout with mobile users as the primary audience, ensuring a solid foundation for smaller screens.
Gradually enhanced the design for larger screens using media queries.
Fluid Layout:

Utilized flexible units like percentages and viewport-based dimensions to ensure elements resize gracefully.
Applied responsive typography and images to maintain aesthetics and readability across devices.
Navbar Toggle and Dropdown:

Implemented a toggle button for the navigation bar to enhance usability on mobile devices.
Created dropdown menus that smoothly expand and collapse, improving the navigation experience.

```js
navToggleButton.addEventListener("click", function () {
  if (!navMenu.classList.contains("collapse")) {
    navMenu.classList.add("collapse");
    headerNavIcon.src = "images/icon-close-menu.svg";
    document.querySelector("body").style.overflow = "hidden";
  } else {
    navMenu.classList.remove("collapse");
    headerNavIcon.src = "images/icon-menu.svg";
    document.querySelector("body").style.overflow = "visible";
  }
});

dropdownToggle.forEach((toggle, index) => {
  toggle.addEventListener("click", function () {
    if (!dropdownMenu[index].classList.contains("drop")) {
      dropdownMenu[index].classList.add("drop");
      dropdownToggleIcon[index].src = "images/icon-arrow-up.svg";
    } else {
      dropdownMenu[index].classList.remove("drop");
      dropdownToggleIcon[index].src = "images/icon-arrow-down.svg";
    }
  });
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

As I continue my development journey, I aim to deepen my understanding and skills in the following areas:

Advanced Responsive Design:

Explore more sophisticated techniques for creating fluid and adaptive layouts.
Implement advanced CSS features like clamp(), CSS Grid, and Flexbox for complex designs.
JavaScript Logic:

Enhance my proficiency in JavaScript to create more dynamic and interactive user experiences.
Develop custom scripts for advanced functionalities like dynamic content loading and state management.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Udemy Webdevlopment](https://www.udemy.com/share/101W9C3@2s1lShiGH32a3OJHMYullps9bvMmvxO_kykXK5ZGloqkGQDHawnryvbZtrMeQ8y81A==/)

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Mitesh Panchal](https://miteshp98.github.io/portfolio-website/)
- Frontend Mentor - [@miteshp98](https://www.frontendmentor.io/profile/miteshp98)
- Linkedin - [@Mitesh Panchal](https://www.linkedin.com/in/mitesh-panchal-356558126/)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks to the challenge provider for creating this opportunity to apply and improve my frontend development skills.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
