const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    description: { type: String },
    media: [
      {
        url: { type: String },
        type: { type: String, default: "image" }
      },
    ],
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isRePosted: {type : Boolean , default : false},
    repostedBy:{  type: Schema.Types.ObjectId, ref: "User" },
    rePostedID : {type: Schema.Types.ObjectId, ref: "Post"},
    like_count: { type: Number ,default:0},
    tags:[{ type : String  }],
    comment_count: { type: Number,default:0 }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Post = model("Post", postSchema, "post");


module.exports = Post;
