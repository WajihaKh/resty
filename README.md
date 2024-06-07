# RESTy

**Author**: Wajiha Khan

**API**: https://auth-api-zxfi.onrender.com/api/v1/clothes

**Version**: 1.0.0

**Overview**:

Phase 1 lays the groundwork for the project by setting up the development environment, organizing the project structure, implementing core features, conducting basic testing, and creating initial documentation. It establishes the foundation for subsequent phases and ensures a structured approach to project development.

<img src="./assets/day-1.png" alt="UML Day 1" style="width:500px;"/>

**Version**: 2.0.0

**Overview**:

Phase 2, we enabled user input for API requests and managed state in our React application using the useState hook. The App component was converted to a functional component to facilitate state management. Users can enter an API URL and select the HTTP method (GET, POST, PUT, DELETE). For GET requests, we used the Star Wars API (SWAPI), and for POST, PUT, and DELETE requests, we used JSONPlaceholder, a testing REST API.

<img src="./assets/day-2.png" alt="UML Day 2" style="width:500px;"/>

**Version**: 3.0.0

**Overview**:

Phase 3 of the project focuses on enhancing RESTy's capabilities by enabling users to interact with live APIs and retrieve data. By implementing features like HTTP request handling and response display, the application becomes a powerful tool for developers to test and explore APIs efficiently. With thorough testing and potential future enhancements, RESTy can become even more versatile and user-friendly.

<img src="./assets/day-3.png" alt="UML Day 2" style="width:500px;"/>

**Version**: 4.0.0

**Overview**:

Phase 4 involves refactoring the App component to use the useReducer hook for state management. This includes defining an initial state and a reducer function to handle various state transitions such as setting loading status, updating data, and managing API request parameters. The state variables like data, headers, loading, requestParams, and history are consolidated within this reducer. The useEffect hook is used to dispatch actions to the reducer for handling API calls and updating the state accordingly. Additionally, a History component is introduced to display past API calls, allowing users to click on history items to view previous results.