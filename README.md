# General
This project was built to create a more user-friendly, appealing, and forgiving interface and web application alternative to Library Genesis. Library Genesis is an online database for files, books, and much more. This repo contains the files for the backend.

Note: the autocorrection feature of the web application is implemented on the frontend so that the user can revert back to their original search before waiting for the backend to deliver the results using the autocorrected seearch query. It is also simply faster to handle it on the frontend. 
### Usage
Heading to the link provided in the repository description will give an error. Append the search query the URL after the backslash to obtain the information about that file.
For example, this searches for the book Atomic Habits:
> [https://nameless-falls-09464.herokuapp.com/james%20clear%20atomic%20habits](https://nameless-falls-09464.herokuapp.com/james%20clear%20atomic%20habits)
![JSON Example of Atomic Habits](https://i.imgur.com/2Z7520m.jpg)
I use [this Chrome extension](https://chrome.google.com/webstore/detail/json-viewer-awesome/iemadiahhbebdklepanmkjenfdebfpfe?hl=en) for JSON formatting

Note: This backend is meant to work with its [frontend counterpart](https://github.com/azc242/libgen-frontend).

## Available Scripts

Clone the repo, then in the main directory, you can run:

### `node app.js`
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## What I Learned

In constructing the backend, I learned how to create a completely separate API that can be connected to not just the frontend meant for this project, but any frontend component that wishes to use this functionality. I could potentially reuse this backend for another project, if I wish.

## Dependencies
- [Express](http://expressjs.com/)
- [libgen.js](https://www.npmjs.com/package/libgen)
