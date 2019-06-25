# Html tag highlighter 
[App Demo](https://dy-html-highlight.herokuapp.com/)

## Decription

This is a React app to fetch html source code from any given url, display all the tags present in that source code along with their count and highlight any selected tag in the source code view.

- Javascript's DOMParser is used to parse the source code and extract tags from it to get their count.
- Start and end index of tags that needs to be highlighted are found using regex. Using these indexes, the source code string is divided into parts and each part is wrapped in a `span` to give them appropriate styling.
- This app uses a proxy server to fetch source code for all the url provided by user. The proxy server is used to avoid blocking of requests by the browser or getting empty responses from servers that don't allow CORS. The proxy server has no other functionality. It just makes a request to the given url and return the response for it. The source code of this server can be found [Here](https://github.com/dydeepak97/proxy-request-server)


### How to use app
- Enter any URL and click on the button.
- Wait for app to fetch source code. New view will open up when code is fetched. Source code will be displayed on the right and tags will be displayed on left.
- To get source code for another url, click on back button at the top of view.
- Click on any tag to find it's occurrence.
- Keep clicking on the tag to scroll to it's next occurrence.

#### Demo
The app is deployed on heroku. To use the app, Click [Here](https://dy-html-highlight.herokuapp.com/)

##### Run locally
To run the app locally, just clone this repository and run following commands: 
  ```
  npm install
  npm start
  ```
  The app can now be used on browser on [http://localhost:3000](http://localhost:300)