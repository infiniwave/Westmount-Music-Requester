import mongoose from "mongoose";

export default mongoose.model(
  "request",
  new mongoose.Schema(
    {
      spotifyId: {
        type: String,
        required: true,
      },

      track: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "track",
        required: true,
      },

      start: {
        type: Number,
        min: 0,
        default: 0,
      },

      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },

      status: {
        type: String,
        enum: ["PRE_PENDING", "PENDING", "PENDING_MANUAL", "AUTO_REJECTED", "REJECTED", "ACCEPTED"],
        default: "PRE_PENDING",
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  )
);