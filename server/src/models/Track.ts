import mongoose from "mongoose";

export default mongoose.model(
  "track",
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      artist: {
        type: String,
        required: true,
      },

      youtubeId: {
        type: String,
        required: true,
      },

      explicit: {
        type: Boolean,
        required: true,
      },
    },
    {
      versionKey: false,
    }
  )
);