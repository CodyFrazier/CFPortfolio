const app = require('./app.js');

const PORT = 5001;

console.log(`****************Preparing to sync on port ${ PORT }...****************`);

app.listen(PORT, () => {
    return console.log(`*********Listening On Port ${ PORT }*********`);
});