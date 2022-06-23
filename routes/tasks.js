const task = require("../model/task");
const Task = require("../model/task");
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }
};
const createTask = async (req, res) => {
  //   res.send("This is post all tasks");
  //   res.send("ehh");
  // res.send("helllo");
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ mssg: err });
    console.log(err);
  }

  // res.send(res.json(req.body));
  // res.json(req.body);
  // console.log(req.body);
  //   console.log(task);
};
const getOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ mssg: `No task found with an ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
const updateOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ mssg: `No task found with an ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
};
const deleteOneTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ mssg: `No task found with an ID: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ mssg: err });
  }
  res.send("This is a deleting a task");
};
module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
};
