const { response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.listen(3333);

const customers = [];

app.post("/accounts", (request, response) => {
    const { cpf, name } = request.body;

    const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);
    if (customerAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists ! "});
    }

    customers.push({
        cpf, 
        name, 
        id: uuidv4(), 
        statement: []
    });
    return response.status(201).send();
    

});