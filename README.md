# Dasher Site [![Netlify Status](https://api.netlify.com/api/v1/badges/c88c4953-b6c1-4f43-b09e-0275fa8a38d8/deploy-status)](https://app.netlify.com/sites/dasher-site/deploys)

This repo holds the source code for the [official Dasher Website.](https://dasher.acecentre.net/)

This website is build using [Hugo, a static site generator](https://gohugo.io/). We use the [Docsy theme](https://www.docsy.dev/) developed by Google.

## Getting Started

### Prerequisites

Before you can run the site you must have the following installed:

1. [Hugo](https://gohugo.io/getting-started/installing/)
2. [NodeJS](https://nodejs.org/en/download/)

### Running locally

To run a local copy of the website so that you can see the changes you make follow these steps:

1. Install dependencies with `npm install`
2. Run `hugo server`
3. Visit `http://localhost:1313` in your browser.

### Building the site

To build a local copy of the website follow these steps:

1. Install dependencies with `npm install`
2. Run `hugo`

NOTE: The production version of the site is build on Netlify

## Deploying the site

The site is builds on every commit to the repo on Netlify. If the commit is to the main branch then the site is deployed to production, if the commit is to a branch then the site is deployed to a staging version.

You can see all the build configuration in the [netlify.toml file](./netlify.toml)
