# Extended Simple Sapper & Prismic example site

This example uses levimykel's [Simple Sapper & Prismic example site](https://github.com/levimykel/prismic-sapper-example) starter, but pulls in content from [Prismic](https://prismic.io)'s [Gatsby Step by Step Tutorial](https://prismic.io/docs/technologies/tutorial-gatsby) site.

## Getting started

To create your new Prismic repository, follow the [Launch the project](https://prismic.io/docs/technologies/tutorial-1-launch-project-gatsby) instructions. Once you've installed the Prismic CLI and logged in, you can create your new Prismic repo as follows:

```
prismic theme https://github.com/prismicio/gatsby-getting-started-tutorial --ignore-conf
```

_If it asks you for the URL of your theme, type:_

```
https://github.com/prismicio/gatsby-getting-started-tutorial
```

Name your repository and choose the default Local folder to initialize your project. The local folder will contain a Gatsby starter, but since we're using Sapper, you can discard it.

Now download the Sapper project code from this repo.

```
npx degit briansteeleca/prismic-sapper-gatsby-tutorial my-prismic-app
```

In prismic-config.js, update `apiEndpoint` with your Prismic repo URL. For example, if your new Prismic repo is named 'my-new-prismic-repo', update the apiEndpoint like so:

```
export const apiEndpoint = "https://my-new-prismic-repo.prismic.io/api/v2";
```

Then install the dependencies and run the project in development mode with:

```bash
cd my-prismic-app
npm install
npm run dev
```

This will a local server at [localhost:3000](http://localhost:3000) where you can see the site in action.

Note: Rather than using scoped CSS, this example dumps all of the CSS from Prismic's Gatsby tutorial site in global.css!
