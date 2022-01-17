
# MVST - Github Light

Github Reader Light is a web app in React that allows you to view a user's repositories and filter them by name.


## Tech Stack

**Client:** React, SCSS, GraphQL




## Demo

https://mvst-github-reader.netlify.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/taniot/mvst-github-reader.git
```

Go to the project directory

```bash
  cd mvst-github-reader
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`REACT_APP_GH_TOKEN`

This is Github's Personal Access Token, which is needed to access the Github GraphQL API. You can configure your token [here](https://github.com/settings/tokens).

Remember not to include your .env files in your repository (i.e. add them to your .gitignore!).

## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility


## Authors

- [@taniot](https://www.github.com/taniot)


## Roadmap

- Additional browser support

- Add more integrations

