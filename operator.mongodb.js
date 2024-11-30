use("practice");

// db.user.find({gender: { $eq: "Male" }}, {gender: 1})
// db.user.find({ age: { $eq: 17 } }, {name: 1, age: 1})
// db.user.find({ age: { $ne: 17 } }, { name: 1, age: 1 });
db.user.find({age: { $gt: 18 }}, {name: 1, age : 1}).sort({age: 1})
