const bcrypt = require("bcrypt");
const { userModel } = require("../models/user.model");

const createUser = async ({ fullname, email, password }) => {

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password: hashedPassword,
  });

  return user;
};

module.exports = {
  createUser,
};
