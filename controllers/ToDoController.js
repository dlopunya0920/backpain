const ToDoModel = require('../models/ToDoModel')

module.exports.getTodo =async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo =async (req, res) => {

    const { text } = req.body

    ToDoModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data)
        })
   
}

module.exports.updateToDo = async (req, res) => {
    const { id, text } = req.body;
    ToDoModel.findByIdAndUpdate(id, { text })
      .then(() => res.send("Update Successfully"))
      .catch((err) => console.log(err));
};
  
  module.exports.deleteToDo = async (req, res) => {
    const { id } = req.body;
    ToDoModel.findByIdAndDelete(id)
      .then(() => res.send("Deleted Successfully"))
      .catch((err) => console.log(err));
};
  