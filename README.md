# 	![Newt start kit](newt_logo.png)

NetlifyCMS, Eleventy, Webpack and Tailwind (NEWT) static site starter kit.

## Install

Install by running the following npm script:
```
npm install
```

## Development

There are a couple options available depending on your preferred development method. NEWT can be ran without Eleventy or NetlifyCMS. But for Tailwind to properly purge unused CSS you will need some kind of file with every used class in your project. I'm going to start with explaining the entire NEWT setup.

### NetlifyCMS

Getting the CMS setup is really easy. I will be going over how to setup a local instance. Though it is possible to run NetlifyCMS on services like Azure, Bitbucket, and GitHub. For more information on setting up on those platforms check out the [NetlifyCMS Docs](https://www.netlifycms.org/docs/).

1. 

### Running Netlify CMS locally

If you want to use a barebones CMS to edit site content, NetlifyCMS is a great place to start. The implementation within the NEWT starter kit is setup for a home page, child page, gallery, and a blog like page.

After you have done the initial install NetlifyCMS is ready to go. First you jsut need to run your development build with the following npm script:
```
npm start
```

Address: http://localhost:8080/admin

To run Netlify CMS on localhost make sure to run the npm script:
```
npm run netlify
```
