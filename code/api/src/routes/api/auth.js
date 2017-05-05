export default {
  post: (req, res) => {
    if (req.body.password === 'password1') {
      res.json({id: 1, email: req.body.email});
    }

    res.status(403).send();
  },
};
