const express = require("express");
const {
  getAllTasks,
  createTask,
  getOneTask,
  updateOneTask,
  deleteOneTask,
} = require("./tasks");
// import express from "express";
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getOneTask).put(updateOneTask).delete(deleteOneTask);

module.exports = router;
