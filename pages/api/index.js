module.exports = (req, res) => {
  return res.status(200).end(JSON.stringify(req.query, null, 2));
};
