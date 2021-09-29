# 	ACRP 03-50A UAM Toolkit

NetlifyCMS, Eleventy, Webpack and Tailwind (NEWT) static site starter kit.

## Install

Install by running the following npm script:
```
npm install
```

## Development

There are a couple options available depending on your preferred development method. NEWT can be ran without Eleventy or Netlify CMS. But for Tailwind to properly purge unused CSS you will need some kind of file with every used class in your project, or add all of the classes to the tailwind config safelist. So I am going to start with explaining the entire NEWT setup.

### Netlify CMS

Getting the CMS setup is really easy. I will be going over how to setup a local instance. Though it is possible to run Netlify CMS on services like Netlify, Azure and utilizing continuous integration/deployment with Git I won't be covering those setups. For more information on those setups check out the [Netlify CMS Docs](https://www.netlifycms.org/docs/).


If you want to use a barebones CMS to edit site content, Netlify CMS is a great place to start. The implementation within the NEWT starter kit is setup with a home page, child page, gallery, and a blog/news like page.

After you have done the initial install Netlify CMS is ready to go. Run your development build with the following npm script:

```
npm run 11tydev
```

This will run Eleventy (11ty), PostCSS CLI, Webpack and the Netlify proxy which is an express server to facilitate local development.

Now open a browser and enter the following address: http://localhost:8080/admin. If it isn't obvious, http://localhost:8080/ is where your local site will be served up.


## Deployment

This project utilizes Azure Static Web Apps and Github actions to dynamically build the site and push to the test site. Once changes are pushed/merged to the main branch on Github, the build action is triggered.

If the site has been moved to Teamsite it will most likely no longer need 11ty. So to run development locally without 11ty use:

```
npm run dev
```

### Eleventy SSG

Eleventy is our SSG (Static Site Generator) and we will utilize [Nunjucks](https://mozilla.github.io/nunjucks/) to power our templates. This is so we can split up our HTML (think includes/partials) and use it's powerful looping to help us from writing repetitive code.

An example of includes can be found in the default template `src/_includes/default.html` where you will see an include for the header and footer.

```
{% include "./partials/header.html" %} 
{% include "./partials/footer.html" %}
```
Eleventy data can be used for things like the site navigation, site title, quicklinks, and injected into our templates without the need to copy and paste to each page.

## To Do

* Site cleanup
* Dynamically create main entry point for javascript from 11ty data file
* Add Social Media Icons. And ability to use default or upload custom.
* Better font loading, [Font Loading Article](https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/)
* Better image loading
* Image srcset and lazy loading
* CMS setting to build files as HTML or ASP
