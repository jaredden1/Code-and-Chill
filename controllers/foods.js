const Food = require("../models/food");

module.exports = {
  index,
  new: newFood,
  show,
  create,
};

async function index(req, res) {
    const foods = await Food.find({})
  res.render("foods/index", { title: "All Foods", foods });
}

function newFood(req, res) {
  res.render("foods/new", { title: "New Food", errorMsg: "" });
}

async function show(req, res) {
  res.render("foods/show", { title: "Food Details", food });
}

async function create(req, res) {
  try {
    await Food.create(req.body);
    res.redirect("/food");
  } catch {
    err;

    res.render("/foods/new", { errorMsg: err.message });
  }
}
