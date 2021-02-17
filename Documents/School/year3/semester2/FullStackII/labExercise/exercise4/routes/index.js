let express = require('express');
let router = express.Router();
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dbAdmin:Vacation5@cluster0.9duxx.mongodb.net/FullStackExercise?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(r => null);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    maxlength: 50,
    minlength:10,
    //Custom validation
    validate(value) {
      let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  city:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v){
        return /^[a-zA-Z\s]*$/.test(v);
      },
      message: props => `${props.value} is not a valid city name`
    }
  },
  url_address: {
    type: String,
    required: true,
    validate: {
      validator: function(v){
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(v);
      },
      message: props => `${props.value} is not a valid url address`
    }
  },
  zip_code: {
    type: String,
    required: true,
    validate: {
      validator: function(v){
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v);
      },
      message: props => `${props.value} is not a valid zip code`
    }
  },
  phone_number: {
    type: String,
    required: true,
    validate: {
      validator: function(v){
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number`
    }
  }
});

const user = mongoose.model("User", userSchema);

//Create New Record
//http://localhost:3000/users
router.post('/users', async (req, res) => {
  const user = new user(req.body);
  console.log(req.body)
  try {
    await user.save((err) => {
      if(err){
        res.send(err)
      }else{
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
