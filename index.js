const app = require('./app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})