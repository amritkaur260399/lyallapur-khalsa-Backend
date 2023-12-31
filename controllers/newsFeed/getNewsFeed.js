const uploadFiles = require("../../services/upload-files");
const NewsFeed = require("../../models/NewsFeed.model");
const formidable = require("formidable");
const createError = require("http-errors");
const { ObjectId } = require("mongoose").Types;

const getNewsFeed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await NewsFeed.findOne({
      _id: ObjectId(id),
    });
    if (!data) throw createError.BadRequest("News Feed not found");
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};

module.exports = getNewsFeed;
