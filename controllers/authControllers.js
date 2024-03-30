import User from "../models/User.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../helper/authHelper.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    // validation
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all fields",
      });
    }

    // existing user

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user is already exist",
      });
    }

    // hash password
    // const hashPassword = await bcrypt.hash(password, 10);
    const hashedPassword = await hashPassword(password);

    //save new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error In Register callback",
      success: false,
      error,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).send({
        success: false,
        message: "please provide email or password",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send({
        success: false,
        message: "Email is not register",
      });
    }

    // password match
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(401).send({
        success: false,
        message: "Invalid user or password",
      });
    }

    const token = await JWT.sign(
      { _id: user.id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );

    res.status(201).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login callback",
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Emai is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await User.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const authTest = async (req, res) => {
  res.send("protected routes");
};
