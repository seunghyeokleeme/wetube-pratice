import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
} from "../controllers/videoController";

const viedoRouter = express.Router();

viedoRouter.get(routes.upload, getUpload);
viedoRouter.post(routes.upload, postUpload);
viedoRouter.get(routes.videoDetail(), videoDetail);
viedoRouter.get(routes.editVideo, editVideo);
viedoRouter.get(routes.deleteVideo, deleteVideo);

export default viedoRouter;
