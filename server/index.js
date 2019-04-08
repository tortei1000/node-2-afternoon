const express = require("express");
let app = express();
const port = 3001;
const mCtrl = require("./controllers/message_controller")

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get("/api/messages", mCtrl.read)
app.post("/api/messages", mCtrl.create)
app.put("/api/messages/:id", mCtrl.update)
app.delete("/api/messages/:id", mCtrl.delete)

app.listen(port, () => {
  console.log(`I am listening on port ${port}`)
})


