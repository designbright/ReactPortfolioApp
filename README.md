# ReactPortfolioApp

##TO DO:

Make splash page 100vh
Update Contact Links
Clean up code - indentations, repeated code, commented out code

Update Favicon

  GH PAGES!!!
  OR - connect to personal domain

###Contact
  Finish Contact Page - make nicer layout
    Contact form?

###JavaScript Calculator  
  Finish adding Challeneges and Lessons Learned section
  Format images


GH PAGES with React
1. Add hompage to .json file
2. run 'npm install --save-dev gh-pages' in your project directory
3. add "deploy" : "npm run build&&gh-pages -d build" inside the scripts object
4. 'npm run deploy' inside of project directory. It will say its published after this runs.


##Getting Started
TO GET APP RUNNING AGAIN FROM LOCAL COMPUTER - cd to project and type npm start in terminal. React will automatically update any changes made in code editor in browser


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
