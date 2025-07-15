const app = require("./app")
const port = process.env.PORT;
const app = require("./app")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});