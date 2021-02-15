var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});

var indexRouter = require('./routes/index');
var indexdoneRouter = require('./routes/indexdone');
const { type } = require('os');

var app = express();
const PORT = 4123;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
which_to_show()
function which_to_show() {
  if (fs.existsSync("./uploads/logs.json")) {
    var data = fs.readFileSync("./uploads/logs.json");
    data = data.toString().split("\n");
    data = JSON.parse(data[data.length - 2]);
    var d = new Date();
    var res = d.getDate().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getFullYear().toString();
    if (data.date.toString() == res) {
      app.use('/', indexdoneRouter);
    } else {
      app.use('/', indexRouter);
    }
  } else {
    app.use('/', indexRouter);
  }
}

app.get('/', function(req, resp){
  if (fs.existsSync("./uploads/logs.json")) {
    var data = fs.readFileSync("./uploads/logs.json");
    data = data.toString().split("\n");
    data = JSON.parse(data[data.length - 2]);
    var d = new Date();
    var res = d.getDate().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getFullYear().toString();
    if (data.date.toString() == res) {
      resp.render('indexRouter');
    } else {
      resp.render('indexRouter');
    }
  } else {
    resp.render('indexRouter');
  }
})

app.post('/upload', upload.single('photo'), (req, res) => {
  if(req.file) {
    var d = new Date();
    var fullDate = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
    relative_path = "/uploads/images/" + req.file.filename;
    filetype = ((req.file.mimetype).split("/"))[1];
    log = {
      date:fullDate,
      name:req.file.originalname,
      path:relative_path,
      type:filetype,
      state:5
    };
    fs.appendFile('uploads/logs.json', JSON.stringify(log) + '\n', (err) => {
      res.render('indexdone');
    })
  }
  else throw 'error';
});

app.listen(PORT, () => {
  console.log('Listening at ' + PORT );
});

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('index');
});

module.exports = app;
