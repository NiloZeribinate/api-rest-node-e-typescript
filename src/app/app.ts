import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (_, response) => {
    return response.json({ message: "Hello World!!"});
})

export { app };
