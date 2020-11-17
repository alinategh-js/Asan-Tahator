var express =   require('express'),
    app     =   express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log("Server is up and running.");
});

