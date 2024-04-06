import User from "./../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  //   hash the password
  const hashedPwd = bcryptjs.hashSync(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPwd });
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
