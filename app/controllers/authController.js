const { model } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models").Users;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(400).json({ message: "Email tidak terdaftar" });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Password salah" });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.status(200).json({ message: "Login berhasil", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    username,
    phoneNumber,
    role
  } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    username,
    phoneNumber,
    role
  });
  const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
  res.status(201).json({ message: "User created successfully", token });
};

const verify = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "Token tidak ada" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: verified.id } });
    if (!user) return res.status(400).json({ message: "User tidak ada" });
    user.verified = true;
    await user.save();
    res.status(200).json({ message: "User berhasil diverifikasi" });
  } catch (error) {
    res.status(400).json({ message: "Token tidak valid" });
  }
};

const getProfile = async (req, res) => {
  console.log(req.user)
  try {
    const profile = await User.findOne(
      {
        where: {
          id: req.user.id
        }
      });
    res.status(200).json({
      profile,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  const { id, } = req.user;
  const { file, } = req;
  const {
    firstName,
    lastName,
    username,
    phoneNumber,
  } = req.body;

  if (file) {
    // const validFormat =
    //   file.mimetype === "image/jpeg" ||
    //   file.mimetype === "image/png" ||
    //   file.mimetype === "image/jpg" ||
    //   file.mimetype === "image/gif";
    // if (!validFormat) {
    //   return res.status(400).json({
    //     status: "failed",
    //     message: "Format file tidak valid",
    //   });
    // }
    const split = file.originalname.split('.');
    const extension = split[split.length - 1];

    // const img = await imagekit.upload({
    //   file: file.buffer.toString('base64'),
    //   fileName: `${id}.${extension}`,
    // });

    const updatedUser = await User.update(
      {
        firstName,
        lastName,
        username,
        phoneNumber,
      },
      { where: { id }, returning: true }
    );
    res.status(200).json({ message: "Profile berhasil diupdate", updatedUser });
  };
};
// const loginGoogle = async (req, res) => {
//   try {
//     console.log('masuk');
//     const code = req.query.code;
//     if (!code) {
//       const url = googleOauth2.generateAuthURL();
//       return res.redirect(url);
//     }
//     const tokens = await googleOauth2.setCredentials(code);
//     const { data } = await googleOauth2.getUserData();
//     return res.status(200).json({
//       data,
//       tokens,
//     });
//   } catch (error) {
//     console.log(error)
//   }
// };

module.exports = {
  login,
  register,
  verify,
  getProfile,
  updateProfile,
  loginGoogle,
};
