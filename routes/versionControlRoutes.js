import express from "express";
import {
  getAllVersionControls,
  getVersionControlById,
  createVersionControl,
  updateVersionControl,
  deleteVersionControl,
} from "../controllers/versionControlController.js";

const router = express.Router();

router.get("/", getAllVersionControls);
router.get("/:id", getVersionControlById);
router.post("/", createVersionControl);
router.put("/:id", updateVersionControl);
router.delete("/:id", deleteVersionControl);

export default router;
