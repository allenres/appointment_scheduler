import express from 'express';
const app = express();
const PORT = 3010;
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const orders = [];
app.get('/', (res, req) =>{
    req.sendFile(`${import.meta.dirname}/views/home.html`);
});
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

