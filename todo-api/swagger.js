import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ToDo API",
      version: "1.0.0",
      description: "A simple CRUD API for managing todos"
    },
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;