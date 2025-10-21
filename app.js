import express from 'express';
const app = express();
const PORT = 3010;

app.get('/', (res, req) =>{
    req.sendFile(`${import.meta.dirname}/views/home.html`);
});
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

