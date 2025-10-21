import express from 'express';
const app = express();
const PORT = 3010;
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const submissions = [];
app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/admin-page', (req, res) =>{
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time
    }
    submissions.push(appointment);
    console.log(submissions);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

