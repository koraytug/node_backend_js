const userTable = require('../services/UserTable');

module.exports = {
  get: (req, res) => {
    // to read param => req.params.id
    const userName = userTable.getUser();
    // res.send(userName);
    res.json(userName);
  },
};
