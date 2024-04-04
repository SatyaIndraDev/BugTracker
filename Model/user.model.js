const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    avatar: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  },{
    versionKey: false
});


const UserModel = mongoose.model("User", UserSchema);


module.exports = {
    UserModel
}