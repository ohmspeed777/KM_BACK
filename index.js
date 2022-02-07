// use .env
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./databases/sequelize');
const app = require('./app');

//connect to database
sequelize
  .sync()
  .then(() => {
    console.log('Successfully connect to database');
  })
  .catch((err) => {
    console.log(err);
  });


// listing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
