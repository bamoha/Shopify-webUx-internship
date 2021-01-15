<p align="center">
<img src="https://res.cloudinary.com/taxapp/image/upload/v1610730106/Shopify%20internship/Screenshot_2021-01-15_at_18.01.12.png"/>
</p>

# Shopify's Intern Challenge (Summer 2021)

This is a project developed as part of **Shopify's Web Engineer Intern (Summer 2021)** challenge. Built with **React.js**, **Redux**, **Tailwind**, **Axios** and **Netlify** for deployment.

## Table of Contents

<!-- vscode-markdown-toc -->

1. [ Demo](#Demo)
2. [ Requirements](#Requirements)
3. [ Installing](#Installing)
4. [ The Web Engineer Challenge](#TheWebEngineerChallenge)

   \_ 4.1. [ Goal](#Goal)

   \_ 4.2. [ Design Decisions](#DesignDecisions)

   \_ 4.2.1. [ Design Tokens](#DesignTokens)

   \_ 4.2.2. [ Components and States](#ComponentsandStates)

   \_ 4.3. [ Framework Choice](#FrameworkChoice)

   \_ 4.4. [ Implementation](#Implementation)

   \_ 4.5. [ Accessibility](#Accessibility)

5. [ Technology Stack](#TechnologyStack)
6. [ References](#References)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='Demo'></a> Demo

[View Demo](https://shopify-internship.netlify.app)

## 2. <a name='Requirements'></a> Requirements

This application is dependent on the installation of Node.js. And Node comes with NPM.

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## 3. <a name='Installing'></a> Installing

1. First, clone this repo using [Git](https://git-scm.com/) or download the [zip](https://github.com/LucasLacerdaUX/Shopify-Summer2019/archive/master.zip)

```
git clone https://github.com/bamoha/Shopify-webUx-internship
```

2. Navigate to the project root folder and use this **npm** command to install the dependencies

```
npm install
```

3. Start the Parcel bundler to run the project on localhost:3000.

```
npm start
```

## 4. <a name='TheWebEngineerChallenge'></a> The UX and Web Engineer Challenge

### 4.1. <a name='Goal'></a> Goal

The main goal of this challenge was to create a simple web app to a webpage that can search OMDB for movies, and allow the user to save their favourite films they feel should be up for nomination.

![Web App Design provided by Shopify](https://res.cloudinary.com/taxapp/image/upload/v1610724521/Shopify%20internship/WhatsApp_Image_2021-01-15_at_4.27.33_PM.jpg)

Users should be able to:

1. Search OMDB and display the results (movies only)

2. Add a movie from the search results to our nomination list

3. View the list of films already nominated

4. Remove a nominee from the nomination list

### 4.2. <a name='DesignDecisions'></a> Design Decisions

We were asked to try and polish the required features by crafting a nicer design. Hence, Before coding this project, a few design decisions had to be made to ensure the app provided a good user experience for everyone. This was done with _Figma_.

[Link to the figma project](https://www.figma.com/file/63hlK89WnTpZHmsdcBxWqp/Untitled?node-id=1%3A18)

<img height="400" width="400" src="https://res.cloudinary.com/taxapp/image/upload/v1610731091/Shopify%20internship/Screenshot_2021-01-15_at_18.15.57.png"/>

<img height="400" width="400" src="https://res.cloudinary.com/taxapp/image/upload/v1610731448/Shopify%20internship/Screenshot_2021-01-15_at_18.17.18.png"/>

<img height="400" width="400" src="https://res.cloudinary.com/taxapp/image/upload/v1610731461/Shopify%20internship/Screenshot_2021-01-15_at_18.23.28.png"/>

<img height="400" width="400" src="https://res.cloudinary.com/taxapp/image/upload/v1610731545/Shopify%20internship/Screenshot_2021-01-15_at_18.25.20.png"/>

<img height="400" width="400" src="https://res.cloudinary.com/taxapp/image/upload/v1610731628/Shopify%20internship/Screenshot_2021-01-15_at_18.26.16.png"/>

#### 4.2.1. <a name='DesignTokens'></a> Design Tokens

The first step was to build a few design tokens to be used on the project, such as colors, typography, spacing, shadows, sizing and animation times.

![Design Tokens](https://res.cloudinary.com/taxapp/image/upload/v1610726576/Shopify%20internship/Desktop_-_1_3.png)

You can view the full list of Design Tokens [here](src/images).

#### 4.2.2. <a name='ComponentsandStates'></a> Components and States

The next step was to make sure every component had a well defined style for each state. That is not only a matter of beauty, but specially important for both the general user experience and the accessibility of the application. Having easy visually distinguable components allows the user to know what's happening on the application and what he's controlling.

![Component States](https://res.cloudinary.com/taxapp/image/upload/v1610728177/Shopify%20internship/MacBook_-_2.png)

### 4.3. <a name='FrameworkChoice'></a> Framework Choice

React is my framework of choice because it allows me to build out reusable components. Example is my Header, I use it in more than one place and so I created a reusable component out of it.

```
 import React from "react";

const PageHead = ({ title }) => {
    return (
        <h1 className="uppercase page-title tracking-wide block text-3xl font-semibold">
            {title}
        </h1>
    );
}

export default PageHead;

```

And its used wherever as:

```
 <PageHead title={"S H O P P I E S"} />
```

The components on this project were not only made as dumb as possible to ensure maximum customization capabilities but were also individually documented to make it easier to use on other projects.

### 4.4. <a name='Implementation'></a> Implementation

- This project uses a mobile first design approach. It takes into consideration the statistics on the [Percentage of all global web pages served to mobile phones from 2009 to 2018](https://www.statista.com/statistics/241462/global-mobile-phone-website-traffic-share/#:~:text=This%20statistic%20presents%20the%20share,all%20global%20web%20pages%20served.). The CSS was written to cater for mobile screens.

- On Search of a movie name, the searchterm is sent to **redux** and **redux** uses **Axios** to request the searchterm from the [OMDB's API](http://www.omdbapi.com/apikey.aspx) .

- The search response is dispatched in the **redux** action and hence, everywhere the search response is needed gets a state update.

- Nominated items can be added by clicking on the pink rounded plus button, the button then changes to a pink minus button which can be used to remove the movie. The `id`s of Nominated item is then dispatched and stored in the **redux** store and hence, state is updated.

- When displaying the results, the id state is retrieved from **redux** to show results wherever it is required such as the search result and the details page.

- The details page also makes a call using **redux** to dispatch the details of a movie from the store. .

### 4.5. <a name='Accessibility'></a> Accessibility

I have on very simple principle when I build apps : to try to make it usable for **everyone**. Anyone should be able to simply use this application.

To ensure a great experience for everyone, many decisions on this project were based on the [Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/) guidelines and recommendations by other professionals. Using `labels` to provide an alternative text for inputs, images and buttons are a great example on the efforts to make web apps accessible. Touch targets, such as `button`s or `input`s meet the minimum target size of 44 by 44 pixels, as defined on [Success Criterion 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

A specific decision was made for this project: since the main interface is based on a Search Results page, it's important to tell users using Screen Readers what has been searched for and how many results were found. For that, we used an `aria-live="polite"` region to make sure the content is readen by the SR and the user is informed that the result list has been updated.

The interface has been tested with both a keyboard, mouse and the Screen Reader (SR) extension [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=pt-BR).

## 5. <a name='TechnologyStack'></a> Technology Stack

- [React.js](https://reactjs.org), using [create-react-app](https://facebook.github.io/create-react-app)
- [Axios](https://github.com/axios/axios)
- [Tailwind](https://tailwindcss.com/docs/)
- [Redux](https://redux.js.org/)
- [ESLint](https://eslint.org/) w/ [Shopify style guide](https://www.npmjs.com/package/eslint-plugin-shopify) + [Prettier](https://github.com/prettier/prettier)

Ps: All images on this documentation were hosted on cloudinary

## 6. <a name='References'></a> References

1. [Shopify style guide Guidelies](https://polaris.shopify.com/)
2. [Accessibility Matters - Search Form](https://www.a11ymatters.com/pattern/accessible-search/)
3. [Percentage of all global web pages served to mobile phones from 2009 to 2018](https://www.statista.com/statistics/241462/global-mobile-phone-website-traffic-share/#:~:text=This%20statistic%20presents%20the%20share,all%20global%20web%20pages%20served.)
4. [Aria Live Regions | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
5. [Using aria-live | bitsofcode](https://bitsofco.de/using-aria-live/)
6. [Search Landmark | ARIA Landmarks Example - W3C](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html)
7. [H44: Using label elements to associate text labels with form controls](https://www.w3.org/TR/WCAG20-TECHS/H44.html)
8. [Example 4 - Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11)
9. [Introduction to the Reduced Motion Media Query - CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
10. [Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
