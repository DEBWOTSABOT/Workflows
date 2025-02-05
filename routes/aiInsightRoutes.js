import express from "express";
import {
  getAllAIInsights,
  getAIInsightById,
  createAIInsight,
  updateAIInsight,
  deleteAIInsight,
} from "../controllers/aiInsightController.js";

const router = express.Router();

router.get("/", getAllAIInsights);
router.get("/:id", getAIInsightById);
router.post("/", createAIInsight);
router.put("/:id", updateAIInsight);
router.delete("/:id", deleteAIInsight);

export default router;
