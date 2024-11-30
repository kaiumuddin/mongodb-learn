use("practice");
// db.user.deleteMany({})

// db.user.countDocuments();
// db.user.findOne({age: 17})
// db.user.findOne({ company: "Demimbu" }, {name: 1}); // cannot use project
db.user.find({ company: "Demimbu" }).projection({ name: 1, company: 1 });

