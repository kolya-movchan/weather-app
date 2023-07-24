# Introduction
The Weather Project on Vue is a web application that provides real-time weather information for various cities. The project follows an API-oriented approach, integrating multiple APIs to fetch data related to IP geolocation, weather forecasts, and city information. By combining these APIs, the application offers users an intuitive and interactive weather dashboard.

[DEMO](https://kolya-movchan.github.io/weather-app/)

## API-Oriented Approach
The Weather Project leverages the following APIs to provide accurate and up-to-date weather data:

IP Geolocation API: This API is used to determine the user's location based on their IP address. It retrieves the latitude and longitude, enabling the application to display weather information for the user's current location automatically.

Weather API: The Weather API fetches weather data for a specific location based on its latitude and longitude coordinates. It provides comprehensive weather details such as temperature, humidity, wind speed, and forecasts for the upcoming days.

Cities API: The Cities API is utilized to obtain a list of cities and their corresponding geographical information. Users can search for weather forecasts in any city covered by this API.

## Technologies Used
The Weather Project on Vue makes use of the following technologies:

### Vue.js
Version: 3.3.4
Description: Vue.js is a progressive JavaScript framework used for building user interfaces. It enables the creation of reactive components and simplifies the development of single-page applications.

### Axios
Version: 1.4.0
Description: Axios is a popular HTTP client used in JavaScript applications to make API requests. It provides an easy-to-use interface for sending asynchronous HTTP requests and handling responses.

### Chart.js
Version: 4.3.0
Description: Chart.js is a versatile charting library that allows developers to create interactive and visually appealing charts and graphs on web pages.

### Sass
Version: 1.63.6
Description: Sass is a CSS extension language that enhances the capabilities of standard CSS. It provides features like variables, nesting, and mixins, making stylesheets more maintainable and organized.

### UUID
Version: 9.0.0
Description: UUID (Universally Unique Identifier) is used to generate unique identifiers. In this project, it ensures that each element in the application has a distinct identifier.

### Vue-Chartjs
Version: 5.2.0
Description: Vue-Chartjs is a wrapper for Chart.js, designed to integrate seamlessly with Vue.js applications. It simplifies the process of using Chart.js within Vue components.

### Vue-Router
Version: 4.2.4
Description: Vue-Router is the official router for Vue.js. It enables navigation between different views in a Vue application and helps create a smooth and dynamic user experience.

### Vue-Sweetalert2
Version: 5.0.5
Description: Vue-Sweetalert2 is a wrapper for SweetAlert2, a customizable and attractive alert/pop-up library. It allows developers to display informative and visually appealing alerts to users.

## Getting Started
To set up the project locally, follow these steps:

Clone the repository and navigate to the project directory.
Install dependencies using npm or yarn by running npm install or yarn install.

Start the development server with npm run dev or yarn dev.
Access the application in your browser at http://localhost:3000.

