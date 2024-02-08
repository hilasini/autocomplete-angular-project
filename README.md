<h1>Autocomplete Component</h1>
The autocomplete component is a reusable Angular component that provides autocomplete functionality for searching city names. It fetches city names from an API endpoint based on the user's input and displays matching city names in a dropdown list.

<h2>Features</h2>
Dynamic autocomplete suggestions based on user input.
Asynchronous fetching of city names from a server-side API.
Single-click selection of a city name from the dropdown list.
Hide autocomplete list when the entered value matches the only city in the list.

<h2>Installation</h2>
Navigate to the project directory:
cd autocomplete-component

Install dependencies:
npm install

<h2>Usage</h2>
To run the project, execute the following command:
<h3>npm start</h3>
This command will start the development server and open the application in your default web browser. You can now interact with the autocomplete component in the browser.
It will start the client-side application on port 4200 and the Python server on port 5000. You can access the client-side application in your web browser at http://localhost:4200.

<h2>Tests</h2>
This project includes spec.ts test files to ensure the correctness of the autocomplete component. To run the tests, execute the following command:
ng test

This command will run the unit tests using the Angular testing framework and display the results in the terminal.
