const { User } = require("./User");
const router = require("express").Router();

//login route
//logout route
//home route /

router.post("/", async (req, res) => {
  //this is calling user object, username and password and res may redirect possibly
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      req.session.username = newUser.username;
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { username: req.body.username },
    });
    if (!existingUser) {
      res.status(400).json({ message: "that user doesn't exist" });
    }
    const validPassword = await existingUser.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = existingUser.id;
      req.session.logged_in = true;
      req.session.username = newUser.username;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  //this is calling user object, username and password and res may redirect possibly

  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router
