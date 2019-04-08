messages = [];
let id = 0;
let userName = "Tiago";

module.exports = {
  read: (req, res) => {
    res.send(messages)
  },
  create: (req, res) => {
    
    let message = req.body;
    message.id = id++;
    message.text = `${userName} ${message.text}`;
    messages.push(message)
    res.send(messages)
  },
  update: (req, res) => {
    let {id} = req.params;
    let userData = req.body;
    userData.id = id
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1, userData)
    res.send(messages)
  },
  delete: (req, res) => {
    let {id} = req.params;
    let index = messages.findIndex(message => +message.id === +id)
    messages.splice(index, 1)
    res.send(messages)
  }
}