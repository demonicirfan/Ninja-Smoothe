const { isEmail } = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length 6 characters'],
  },
});

//* fire a fucntion before a doc saved to database
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//* static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email }); //if the email exist
  if (user) {
    const auth = await bcrypt.compare(password, user.password); // if the email is inside the database then we compare the password using bcrypt
    if (auth) {
      return user; //if it is true return the user
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
