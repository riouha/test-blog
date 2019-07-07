const express= require('express');
const bodyParser = require('body-parser');
const mydb = require('./Database/dbConfig');
const User = require('./Models/UserModel');
const Profile = require('./Models/ProfileModel');
const Post = require('./Models/PostModel');
const Tag = require('./Models/TagModel');
const Category = require('./Models/CategoryModel');
const PostTags = require('./Models/Post_Tags');

// const productRouter = require('./Routes/product.js');

//====================================================
const app = express();
// connect to postgres

Profile.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Post,{constraints:true,onDelete:'CASCADE'});
Post.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
Post.belongsTo(Category,{constraints:true,onDelete:'CASCADE'});
Post.belongsToMany(Tag,{through:PostTags});
Tag.belongsToMany(Post,{through:PostTags})

mydb.authenticate()
  .then(() => console.log('connected to postgres ...'))
  .catch(err => {console.error('Error : ', err);});

// sync mydb.models to postgres database (create/update tables)
mydb.sync({force:true})//
  .then(()=>console.log('table created .........'))
  .catch((err)=>console.log('error'));

// app.use(bodyParser.json());
// app.use('/product', productRouter);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listenning to port ${port}`));
  
