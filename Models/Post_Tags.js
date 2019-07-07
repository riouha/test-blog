const Sequelize = require('sequelize');
const sequelize = require('../Database/dbConfig');
//======================================================
const PostTags = sequelize.define('post_tags', {
});
module.exports = PostTags;
