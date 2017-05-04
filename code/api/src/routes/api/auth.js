export default {
  post: (req, res) => {
    console.log(req.body);
    if (req.body.password === 'password1') {
      res.json({success: true});
    }

    res.status(403).send();
  },
};
