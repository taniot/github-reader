
# MVST - Github Light Reader

Github Light Reader is a web app in React that allows you to view a user's repositories and filter them by name. At the moment, the application uses a default user profile for the consultation and search of repositories.


### Requirements

* [x]  The application must be written using React
* [x]  You are required to use git for versioning
* [x]  Feel free to use any additional plugin
* [x]  Google Chrome is the testing browser

## Demo

https://mvst-github-reader.netlify.app/


## Tech Stack

**Client:** React, Sass, GraphQL




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

## Future Improvements

- Search user
- Debouncing research for better use of resources
- Pagination
- Filter by tag and language
- Sort by last updated, name and stars

## Feedback

For this challenge I chose to implement the Github GraphQL API directly from the frontend in order to have a good balance between time and result, but it would be better to have a backend that consults external APIs in order to make the frontend more usable and with reusable patterns.

The system uses two GraphQL queries: the first one retrieves data from the user to populate the profile, the second one is the search query. Note that the data in the first call contains a list of the user's repositories, but for search purposes - unless you want to filter locally via Array.filter - it is not very useful. I preferred to exploit the search capabilities provided by Github so that, in a potential development of new features such as "search by tag", "search by language" and "sorting", the same search model could be reused.

## Authors

- [Gaetano Frascolla](https://www.github.com/taniot)

