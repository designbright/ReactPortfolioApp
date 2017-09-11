# ReactPortfolioApp

##TO DO:

Make splash page 100vh
Update Contact Links


  GH PAGES!!!
  OR - connect to personal domain

Add link to PDF of Resume (Which section?)
  Make this open in a new tab

###Home
Add images to Home portfolio page
    Add captions to projects or style into a card layout

###ABOUT  


###Contact
  Finish Contact Page - make nicer layout
    Contact form?

Make more responsive for mobile in CSS with Media Queries
Move all images to IMAGE FOLDER and re-route paths


##Getting Started
TO GET APP RUNNING AGAIN FROM LOCAL COMPUTER - cd to project and type npm start in terminal


To get started you will need to use create-react-app to quickly scaffold a project. You should migrate your components into a components folder in the src directory and the styles into a styles folder in the src directory. Link up all pages to make sure they working and test using npm run start in the console, use Ctrl+c to exit.

You will need use npm install --save react-router-dom in the terminal to save React Router 4 to your project dependencies and make it available for import.

In your index.js file, you will need to import { BrowserRouter, Route, Switch } from react-router-dom.

You should use your knowledge of nested child components from React to create a BaseLayout component that houses a navigation bar and takes children (Hint: {this.props.children} or {props.children}) components and renders on each screen. You should be able to see your navigation bar from every component/page rendered.

You should have the following separate components:

App.js
BaseLayout.js
Home.js
About.js
Portfolio.js
You should have at least two or three buttons that are stylized <Link> components in the body of your app.

Your navigation bar should be fully functional and allow the users to navigate seamlessly through your app. The back button in the browser should take user's to the previous screen (because of the history API and using <BrowserRouter>).

The final project should be a relatively attractive mock portfolio website. The content and styling are up to you. See example down below for a general idea of simple project structure, though your project should be more professional and polished!

Hints  

Remember that you can create a component that receives other components using {props.children} or {this.props.children} depending upon it being a class based component or a functional component.
