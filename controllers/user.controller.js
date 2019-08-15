const User = require('../models/user.models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY || "hbhgHGYU&8UHBFSG";

exports.register = (req, res) => {
  let user = new User(
      {
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password)
      }
  );

  user.save(function (err) {
      if (err) throw err;
      const expiresIn = 24  *  60  *  60;
      const access_token = jwt.sign({ id:  user.id }, SECRET_KEY, {
                expiresIn:  expiresIn})
      res.status(201).send({"message": "User Created successfully", "access_token": access_token });
  })
}

exports.login = (req, res) => {
  if (err) throw err;
  res.status(200).send({ access_token: "" })
}
