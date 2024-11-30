use("practice");

db.user.find(
  { age: { $gt: 18, $lt: 30 }, gender: "Female" },
  { gender: 1, name: 1, age: 1 }
);

db.user.find(
  { gender: "Female", age: { $in: [17,26, 24, 26, 24]} },
  { gender: 1, name: 1, age: 1 }
);
