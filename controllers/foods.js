const Food = require("../models/food");

module.exports = {
  index,
  new: newFood,
  show,
  create,
};

async function index(req, res) {
try {
  const foods = await Food.find({});
  res.render("foods/index", { title: "All Foods", foods });
} catch(err) {
    console.log(err.message)
    res.redirect("/")
}
}

function newFood(req, res) {
  res.render("foods/new", { title: "New Food", errorMsg: "" });
}

async function show(req, res, next) {
  try {
    const food = await Food.findById(req.params.id);
    res.render("foods/show", { title: "Food Details", food });
  } catch (err) {
    console.log(err);
    next(Error(err));
  }
}

async function create(req, res) {
    req.body.favorite = !!req.body.favorite
  try {
    await Food.create(req.body);
    res.redirect("/foods");
  } catch (err) {
    console.log(err);
    

    res.render("/foods/new", { errorMsg: err.message });
  }
}
