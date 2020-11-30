const router = require("express").Router();
const User = require('../Models/user.model')

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

router.get("/", authCheck, (req, res) => {
  //res.send('you are logged in, this is your profile - ' + req.user.username);
  res.json(req.user);
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate({_id: req.params.id}, req.body)
      .then(user => {
          res.json(user);
      })
      .catch(err => {
          res.status(404).json({success: false})
      });
});


module.exports = router;
