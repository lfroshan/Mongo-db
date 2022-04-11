const mongoose = require('mongoose');

function connection(app) {
  const DBURI =
    'mongodb+srv://roshan394:roshan@tutorial.0dyhz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  try {
    mongoose
      .connect(DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() =>
        app.listen(3000, () => {
          console.log('You have connected successfully to the database!');
          console.log('listening to 3000');
        })
      )
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  connection,
};
