
import express from 'express';
import routes from './src/routes/Routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve();
var app = express();
const PORT=4000;
var dbURL= '--'

//mongoose.Promise= global.Promise;
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
routes(app);
app.get('/',(req,res)=>{
  //console.log(__dirname)
  //res.sendfile('app.html');}
  res.send('I´m an API')}
)

app.listen(PORT, ()=> {
  console.log(`i'm in port ${PORT}`);
})
