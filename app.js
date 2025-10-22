import express from 'express';
const app = express();
const PORT = 3010;
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const submissions = [];
app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});


//Admin page where all the reservations are submitted
app.get('/admin-page', (req, res) =>{
    res.send(submissions);
});

app.post('/reservation', (req, res) =>{
    const currentTime = new Date();
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        submitTime : currentTime
    }
    submissions.push(appointment);
    console.log(submissions);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
});

