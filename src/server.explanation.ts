import express from 'express'

const app = express();

app.use(express.json()); // Express JSON Package to convert JSON to JS object

// When user access localhost:3333/users you execute the module. Second parameter is a function that takes the request and the reponse as parameters

// Methods: 
// GET - Search or list an information
// POST - Create new information
// PUT - Update existing information
// DELETE - Deleting information

// Body (Request body): Data to create or update data
// Route Params: Identify which resource I want to update or delete - use request.params
// Query Params: Pagination, filtering, sorting. - use request.query

app.get('/', (request, response) => {
  return response.json({message: "hello world"})
});

app.listen(3333); // Makes application listen to HTTP requests, parameter is the port used, default port is 80. API address is gonna be localhost:3333
